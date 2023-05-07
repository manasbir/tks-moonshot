import Image from "next/image"
import logo from "../../public/vercel.svg"

export default function Header() {
    return (
        <div className="flex flex-row justify-end w-full absolute">
        <button className='bg-pink-500 p-3 m-2 mx-3 rounded-md'>Enter App</button>
      </div>
    )
}