import Image from "next/image";

type IData = {
    data: {
        name: string
        imageUrl: string
        videoGames: []
    }[]
}

const ServerSide = async () => {
    const res = await fetch("https://api.disneyapi.dev/character")
    const data: IData = await res.json()

    return(
        <>
            <div className="font-black text-center">Api Using Server Side</div>
            {data?.data.map((item, index) => (
                <div className="flex flex-wrap items-center text-center p-10 jusitfy-center flex-col border-none bg-orange-200" key={index}>
                    <h2 className="font-black text-center">Name: {item.name}</h2>
                    <Image className="items-center" src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    <p className="font-black text-center">Games: {item.videoGames}</p>
                </div>
            ))}
        </>
    )
}

export default ServerSide