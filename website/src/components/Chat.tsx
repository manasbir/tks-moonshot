import { ChangeEvent, FormEvent, useState } from "react"
import send from "../../public/enter.svg"
import Image from "next/image"
import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from "openai";
import { Inter } from "next/font/google";

interface ChatProps {
    newEvents: 
}

export default function Chat(props: ChatProps) {
    interface Message {
        role: ChatCompletionRequestMessageRoleEnum,
        content: string
    }

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<Message[]>([]);

    const configuration = new Configuration({
        // CHANMGE CHANGFE HCMEGH
        /// TODO
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration);

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessages([...messages, {role: "user", content: message}])
        let arrayOfMessages = messages;
        arrayOfMessages.unshift(
            {"role":"system","content": "You are a personal assistant called UNAI, you help optimize user's days using their suggestions and circadian rhythms. Create schedules when prompted and learn more about the user's needs. The user is a student who is trying to align themselves more towards their circadian rhythm if possible"}
        )
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: arrayOfMessages
        })

        console.log(res)

        if (res.data.choices[0].message?.content != undefined) {
            setMessages([...messages, {role: "assistant", content: res.data.choices[0].message?.content}])
        }
    }

    const createSchedule = async () => {
        let arrayOfMessages = messages;

        arrayOfMessages.push({"role":"system","content":`The user is now satisfied with the given schedule, the current date is ${new Date}. List the events following this template:
            "{[
                {
                    title: 'New Year',
                    description: 'New Year',
                    location: 'Global',
                    start: '2023-01-01 00:00:00',
                    end: '2023-01-01 23:59:59',
                    organizer: "UNAI",
                    link: "",
                    frequency: "YEARLY",
                },
                {
                    title: 'Weekly Meeting @ DCTRL',
                    description: 'EthVancouver weekly meetups for networking, friends, and learning about crypto',
                    location: '436 W Pender, Vancouver BC Canada',
                    start: '2023-05-05 18:30:00',
                    end: '2023-05-05 23:00:00',
                    organizer: "UNAI",
                    link: "",
                    frequency: "WEEKLY",
                },
            ]}"
        `})

        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: arrayOfMessages
        })

        console.log(res)



    }

    const updateCurrMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    return (
        <div className="w-5/12 min-h-screen flex flex-col p-3 max-w-prose text-xs justify-between">
            <div className="flex flex-col gap-1">
            {
                messages.map((message, index) =>
                    <div key={index} className="text-xs" style={{backgroundColor: `${message.role == "user" ? "#353535": "#222222"}`, textAlign: `${message.role == "user" ? "right" : "left"}`}}>
                        <p className="font-black text-sm">{message.role == "user" ? "You" : "UMAI"}</p>
                        <div className="text-xs overflow-auto whitespace-pre-line">
                            {message.content}
                        </div>
                    </div>
                    )
            }
            </div>
            <div className="w-full text-black h-full">
                <form className="flex flex-row w-full text-xs " onSubmit={(e) => sendMessage(e)}>
                    <textarea className="w-11/12" placeholder="Talk to UNAI" onChange={(e) => updateCurrMessage(e)}/>
                    <button type="submit" className="bg-white items-center flex flex-col justify-center w-1/12">
                        <Image src={send} alt="submit"/>
                    </button>
                </form>
                <button onClick={createSchedule}>ADD TO CALENDAR</button>
            </div>
        </div>
    )
}
  