import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from "../../public/favicon.ico";
import Heart from "../../public/heart.svg"
import Graph from "../../public/graph.svg"
import Feedback from "../../public/feedback.svg"
import Pencil from "../../public/pencil.svg"
import Link from 'next/link';
import Calendar from '../../public/calendar.svg';
import Eye from "../../public/eye.svg"
import Pie from "../../public/pie.svg"
import Biometric from "../../public/biometric.svg"

const inter = Inter({subsets: ["latin"]})

export default function Information(){
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-10 bg-gradient-to-t to-black via-neutral-800 from-pink-700 font-sans">
            <div className="max-w-prose m-5 p-2">
                <h1 className='text-2xl font-semibold mb-2'>How UNAI works</h1>
                <p className=''>UNAI enables you to be the near perfect you. UNAI injects events into your calendar optimizing your day using different datapoints like your 
                goals, reflections, past chats and bio-metrics. Allowing you to save your time on the thing that actually matter
                </p>
            </div>
            <div className="mt-5 w-10/12">
                <div className="flex flex-row justify-evenly items-stretch gap-5 mt-5 flex-wrap">
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-4 max-w-prose w-64 mb-3">
                        <Image src={Pie} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2 className='text-xl font-semibold'>Get 15 more mins every hour</h2>
                        <p>By optimizing your schedule to your circadian rhythm, experience a 23% boost in productivity</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-4 max-w-prose w-64 mb-3">
                        <Image src={Eye} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2 className='text-xl font-semibold'>Experience less burnout and fatigue</h2>
                        <p>UNAI optimizes for your sleep and your health. With regular feedback with UNAI, it will make sure you are not under too much load.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-4 max-w-prose w-64 mb-3">
                        <Image src={Heart} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2 className='text-xl font-semibold'>A friend</h2>
                        <p>UNAI is not just your assistant, but your friend. UNAI learns from you so it can help you better.</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-4 max-w-prose w-64 mb-3">
                        <Image src={Biometric} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2 className='text-xl font-semibold'>Bio-metrics</h2>
                        <p>UNAI Utilizes bio-metric data like your heartrate, stress levels, and sleep to better adjust for you.
                            making sure your healthy and creating realistic goals
                        </p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-4 max-w-prose w-64 mb-3">
                        <Image src={Graph} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2 className='text-xl font-semibold'>Improves over time</h2>
                        <p>UNAI learns from your past, relfections, and from regular check-ins. Experience better performance
                            over time as UNAI learns.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col items-center text-black p-4 max-w-prose w-64 mb-3">
                        <Image src={Calendar} alt="Vercel Logo" className='w-3/4 mb-3'/>
                        <h2 className='text-xl font-semibold'>Calendar</h2>
                        <p>This is the main way UNAI helps you. Injecting events into your calendar once UNAI creates a suitable schedule for you.
                        </p>
                    </div>
                </div>
                <h1 className='text-2xl text-center font-sans font-semibold pt-28 p-20'>{"Continue being you. Continue being human. UNAI will handle the rest."}</h1>
                <div className="flex flex-row justify-evenly items-stretch gap-5">
                    <a href="https://medium.com/@dannycai/unai-633c5db232f5" className='bg-pink-600 p-4 text-lg rounded-md '>Our Medium</a>
                    <Link href="/one-pager.pdf" className='bg-pink-600 p-4 text-lg rounded-md '>One Pager</Link>
                </div>
            </div>
        </div>
    )
}