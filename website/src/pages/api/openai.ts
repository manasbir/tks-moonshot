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
  if (req.method === "POST") {
    const messages = req.body.messages


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
          res.status(200).json({content: JSON.stringify({role: "assistant", content: result.data.choices[0].message?.content})})
      } else {
          res.status(400).json({content: "No response from OpenAI"})
      }
  }
}