import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-row justify-end w-full absolute">
        <Link className='bg-pink-500 p-3 m-2 mx-3 rounded-md' href={"/app"}>Enter App</Link>
      </div>
    )
}