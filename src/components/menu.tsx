import Link from "next/link";

interface MenuProps {
    op1: string
    op2: string
    op3: string
    op4: String
}

export const Menu = ({op1, op2, op3, op4}: MenuProps) => {
    return(
        <header className="bg-black text-white p-2">
            <nav>
                <Link className="font-black m-5" href={"/"}>{op1}</Link>
                <Link className="font-black m-5" href={"/hookPage"}>{op2}</Link>
                <Link className="font-black m-5" href={"/axiosPage"}>{op3}</Link>
                <Link className="font-black m-5" href={"/serverSide"}>{op4}</Link>
            </nav>
        </header>
    )
}