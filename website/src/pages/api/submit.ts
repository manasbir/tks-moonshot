// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";


type Data = {
  content: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log(req.body)
  if (req.method === "POST") {
    const messages = req.body


    const configuration = new Configuration({
      // CHANMGE CHANGFE HCMEGH
      /// TODO
      apiKey: process.env.OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration);

    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    })

    console.log(result)
      

    if (result.data.choices[0].message?.content != undefined) {
        console.log(result.data.choices[0].message?.content)
        res.status(200).json({content: JSON.stringify({content: JSON.parse(handleJSONResponse(result.data.choices[0].message?.content))["listOfEvents"]})})
    } else {
        res.status(400).json({content: "No response from OpenAI"})
    }
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