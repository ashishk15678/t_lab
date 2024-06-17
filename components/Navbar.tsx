import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { CgGames } from "react-icons/cg"

export default function Navbar({ classname }: { classname: string }) {

    const navItems = [
        { id: 1, name: "Apps" , comp:<AiOutlineAppstoreAdd /> }
        , { id: 2, name: "Games" , comp:<CgGames /> }
    ]

    return (
        <>
            <div className={classname + "w-full"} >
                <div className="bg-gray-700 text-white 
             flex h-16 ml-4 mr-4 rounded-md mt-4">
                     
                    <div className="flex flex-row w-full  p-2 justify-items-end">{
                        navItems.map((e)=>{
                            return(
                                <div className=" rounded-md flex items-center justify-items-center
                                 hover:bg-gray-800/40 p-4 cursor-default" key={e.id}>
                                    <p className="text-xl">{e.comp}</p>
                                </div>
                            )
                        })
                    }</div>
                </div>
            </div>
        </>
    )
}