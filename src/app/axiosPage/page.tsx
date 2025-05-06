"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import { api } from "@/constants/api"

interface IData{
    name: string
    imageUrl: string
    videoGames: []
}

const AxiosPage = () => {
    const [data, setData] = useState<IData[]>([])

    useEffect(() => {
        api.get(`/character`).then((res : any) => {
            setData(res.data.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])
    return(
        <>
            <h1 className="font-black text-center">Api using Axios</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data.map((item, index) => (
                    <div className="flex flex-wrap items-center text-center mt-10 jusitfy-center flex-col border-none" key={index}>
                        <h2 className="font-black text-center">{item.name}</h2>
                        <Image src={item.imageUrl} alt={item.name} width={200} height={200}/>
                        <p className="font-black text-center">{item.videoGames}</p>
                    </div>
                ))}
            </Suspense>
        </>
    )
}

export default AxiosPage