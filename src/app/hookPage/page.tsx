"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface IData{
    name: string
    imageUrl: string
    videoGames: []
}

const HookPage = () => {
    const[characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://api.disneyapi.dev/character")
            const data = await res.json()
            setCharacters(data.data)
        }
        load()
    }, [])

    return(
        <>
            <h1 className="font-black text-center">Api using Hook</h1>
            <div>
                {characters.map((item, index) => {
                    return(
                        <div className="flex flex-wrap items-center text-center mt-10 jusitfy-center flex-col border-none" key={index}>
                            <h2 className="font-black text-center">{item.name}</h2>
                            <Image src={item.imageUrl} alt={item.name} width={200} height={200}/>
                            <p className="font-black text-center">{item.videoGames}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default HookPage