import { headers } from "next/headers"
import Link from "next/link"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { CgGames } from "react-icons/cg"

export default function Switcher() {
    const path = headers().get("referer")
    console.log(path)
    return (

        <>
            <div>
                <div className="lg:flex md:flex hidden
                w-[90px] bg-gray-600 h-[100vh] 
                p-2 fixed ">
                    <div className="w-full ">
                        <Switcherbtn name="Apps" link="/apps" isActive comp={<AiOutlineAppstoreAdd className="h-8 w-8" />} />
                        <Switcherbtn name="Games" link="/games" isActive comp={<CgGames className="h-8 w-8" />} />
                    </div>
                </div>

                <div className="lg:hidden md:hidden flex fixed bottom-0 w-[100vh]">
                    <div className="w-[100vh] bg-gray-700/70 h-16 flex flex-row">
                        <Switcherbtn name="Apps" link="/apps" isActive comp={<AiOutlineAppstoreAdd className="h-8 w-8 ml-8" />} />
                        <Switcherbtn name="Games" link="/games" isActive comp={<CgGames className="h-8 w-8 ml-8 " />} />
                    </div>

                </div>
            </div>
        </>
    )
}

export const origin = "http://localhost:3000"

export function Switcherbtn({ name, link, isActive, comp }: { name: string, link: string, isActive: boolean, comp: any }) {
    return (
        <>

            <Link href={origin + link} className="lg:w-full md:w-full w-16 lg:ml-0 md-ml-0 sm-ml-10 flex
                    justify-center items-center my-2 text-2xl">
                <div className="w-full rounded-md  h-16 flex items-center justify-center text-xl
                text-white/60 hover:text-white/90 focus:text-white/90   ">

                    {comp}

                </div>
            </Link>
        </>
    )
}