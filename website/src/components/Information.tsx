import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from "../../public/favicon.ico";
import Heart from "../../public/heart.svg"
import Graph from "../../public/graph.svg"
import Feedback from "../../public/feedback.svg"
import Pencil from "../../public/pencil.svg"

export default function Information(){
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
            <div className="max-w-prose">
                <h1 className='text-2xl'><b>How unai works</b></h1>
                <p>UNAI injects events into your calendar based off your feedback and data. You can talk to UNAI like your personal assistant and it will do its best to make sure you are not wasting any time.</p>
            </div>
            <div className="max-w-prose mt-5">
                <h1 className='text-2xl'>Data Points</h1>
                <div className="flex flex-row justify-evenly items-stretch gap-5 mt-5">
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-2 max-w-prose">
                        <Image src={Pencil} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2><b>Notes</b></h2>
                        <p>UNAI reads your notes to understand what you{"'"}re working on and what your priorities are.</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-2 max-w-prose">
                        <Image src={Feedback} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2><b>Feedback </b></h2>
                        <p>UNAI reads your notes to understand what you{"'"}re working on and what your priorities are.</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-2 max-w-prose">
                        <Image src={Heart} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2><b>Bio-Metrics (Coming Soon!)</b></h2>
                        <p>UNAI reads your notes to understand what you{"'"}re working on and what your priorities are.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}