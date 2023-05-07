import Image from "next/image"
import logo from "../../public/vercel.svg"

export default function Header() {
    return (
        <div className="flex flex-row justify-between w-full">
        <Image src={logo} alt="umai logo" className=' h-8 invert bg-red-500 w-auto'/>
        <button className='bg-pink-500 p-3 m-2 mx-3 rounded-md'>Try UNAI</button>
      </div>
    )
}