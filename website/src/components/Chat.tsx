import { ChangeEvent, FormEvent, useState } from "react"
import send from "../../public/enter.svg"
import Image from "next/image"
import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from "openai";
import { Inter } from "next/font/google";


interface Event {
    title: string,
    description: string,
    location: string,
    start: string,
    end: string,
    organizer: string,
    link: string,
    frequency: string
}
interface ChatProps {
    newEvents: (newState: Event[]) => void
}

export default function Chat(props: ChatProps) {
    interface Message {
        role: ChatCompletionRequestMessageRoleEnum,
        content: string
    }

    const [messages, setMessages] = useState<Message[]>([]);

    const configuration = new Configuration({
        // CHANMGE CHANGFE HCMEGH
        /// TODO
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration);

    /* I am a high school student. I go to school from 8:30 to 3:30 (15 min drive). I like to go to the gym after school and stay for about 1:15 hours. Then I commute home while writing notes and reflecting for about 40mins. Once I'm home I need help optimizing my day. I need to meditate more, read, and code. I would like to read before I sleep. I take 20mins to cook dinner then I like to watch anime while eating. Could you help me make a schedule? */

    const sendMessage = async (e: any) => {
        e.preventDefault()
        const msgs: Message[] = [...messages, {role: "user", content: e.target.msg.value}]
        
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system" ,"content": "You are a personal assistant called UNAI, you help optimize user's days using their suggestions and circadian rhythms. Create schedules when prompted and learn more about the user's needs. The user is a student who is trying to align themselves more towards their circadian rhythm if possible"},
             ...msgs]

        })

        

        if (res.data.choices[0].message?.content != undefined) {
            setMessages([...msgs, {role: "assistant", content: res.data.choices[0].message?.content}])
        } else {
            alert("error")
        }
        e.target.reset()
    }

    const createSchedule = async () => {
        console.log("sent")
        let arrayOfMessages = messages;

        arrayOfMessages.push({"role":"system","content":`The user is now satisfied with the given schedule, the current date is ${new Date}. List the planned schedule with all the events for tomorrow in the format of the following examples:
            """{"listOfEvents":[
                {"title":"Daily Meditation","description":"Meditate to be mindful, learn about yourself","location":"Home","start":"2023-01-01 08:00:00","end":"2023-01-01 8:30:00","organizer":"UNAI","link":"","frequency":"DAILY"},
                {"title":"Weekly Meeting @ DCTRL","description":"EthVancouver weekly meetups for networking, friends, and learning about crypto","location":"436 W Pender, Vancouver BC Canada","start":"2023-05-05 18:30:00","end":"2023-05-05 23:00:00","organizer":"UNAI","link":"","frequency":"WEEKLY"},
            ]}"""`})

        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: arrayOfMessages,
            temperature: 0
        })

        console.log(res)

        if (res.data.choices[0].message?.content != undefined) {
            console.log(res.data.choices[0].message?.content)
            console.log(handleJSONResponse(res.data.choices[0].message?.content))
            props.newEvents(JSON.parse(handleJSONResponse(res.data.choices[0].message?.content)).listOfEvents)        
        }

        

    }

    const handleJSONResponse = (str: string) => {
        const startIndex = str.indexOf('{');
        const endIndex = str.lastIndexOf('}');
        if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
            return str.substring(startIndex, endIndex + 1).replace("\n", "");
        }
        return "{}";
    }

    return (
        <div className="w-5/12 max-h-screen flex flex-col p-3 max-w-prose text-xs justify-between overflow-auto">
            <div className="flex flex-col gap-1 h-full overflow-auto">
            {
                messages.map((message, index) =>
                    <div key={index} className="text-xs p-1" style={{backgroundColor: `${message.role == "user" ? "#353535": "#222222"}`, textAlign: `${message.role == "user" ? "right" : "left"}`}}>
                        <p className="font-black text-sm">{message.role == "user" ? "You" : "UNAI"}</p>
                        <div className="text-xs overflow-auto whitespace-pre-line">
                            {message.content}
                        </div>
                    </div>
                    )
            }
            </div>
            <div className="w-full text-black h-full">
                <form className="flex flex-row w-full text-xs " onSubmit={sendMessage}>
                    <textarea className="w-11/12 h-24" id="msg" name="msg" placeholder="Talk to UNAI" required/>
                    <button type="submit" className="bg-white items-center flex flex-col justify-center w-1/12 cursor-pointer">
                        <Image src={send} alt="submit"/>
                    </button>
                </form>
                <button onClick={createSchedule} className="mt-2 p-2 bg-white cursor-pointer">ADD TO CALENDAR</button>
            </div>
        </div>
    )
}
  