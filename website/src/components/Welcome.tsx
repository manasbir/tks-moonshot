import { useEffect, useState } from "react"

export default function Welcome(){
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    useEffect(() => {
        const text = 
            ` optimize your day with unai \n
            > unai is your personal assistant \n
            > helping you waste less time and work to your biological strengths \n
            > humans weren't made to have 8 hours of flow state, nor turn it on at will \n
            > unai helps you work with your body, not against it`
        const interval = setInterval(() => {
            if(currentIndex < text.length){
                setCurrentText(currentText + text[currentIndex])
                setCurrentIndex(currentIndex + 1)
            }
        }, 25)
        return () => clearInterval(interval)
    }, [currentIndex, currentText])


    
    return(
        <div className="min-h-screen w-full bg-gradient-to-b from-neutral-800 to-neutral-800 via-neutral-700 flex flex-col items-center">
            <div className="flex flex-row items-center justify-between w-full h-full min-h-screen">
                <div className="text-8xl text-pink-500 p-4 flex flex-col justify-center items-center h-full w-full">
                    <h1 className=""><b>unai</b></h1>
                    <p className="text-2xl text-white translate-x-1/2 -translate-y-full">you and ai</p>
                </div>
                <div className="w-full flex items-center justify-center p-3">
                    <div className="p-1 border rounded-lg h-full max-w-prose bg-black flex flex-col font-mono text-sm whitespace-pre-line">
                        {">"}{currentText}
                    </div>
                </div>
            </div>
        </div>
    )

}