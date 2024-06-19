import Image from "next/image";
import Link from "next/link";

export default function CoverComp({ name, link, id, image }:
    { name: string, link: string, id: number, image: string }) {
    return (
        <>
            <Link href={`/apps/${link}`} className="top-[200px] 
                left-[190px]  ">
                <div className="lg:w-[35    0px] w-[300px] md:w-[250px]  lg:h-[220px] h-[220px]
                 md:h-[170px] rounded-md flex "
                >
                    <div className="coverDiv w-full h-full " >
                    </div>
                    <p className="lg:text-2xl text-2xl md:text-xl text-gray-500 font-extrabold 
                     flex flex-col absolute z-2 lg:ml-[70px] ml-[70px]
                      md:ml-[60px] lg:mt-[160px] mt-[160px] md:mt-[140px]  ">
                        {name}
                    </p>

                </div>
            </Link>
        </>
    )
}