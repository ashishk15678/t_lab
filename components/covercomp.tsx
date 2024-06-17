import Image from "next/image";
import Link from "next/link";

export default function CoverComp({ name, link, id, image }: { name: string, link: string, id: number, image: string }) {
    return (
        <>
            <Link href={`/apps/${link}`}>
                <div className="w-[300px] h-[220px] rounded-md flex"
                >
                    <div className="coverDiv w-full h-full relative" >
                    </div>
                    <p className="text-2xl text-gray-500 coverP opacity-100  font-extrabold absolute z-2 top-[200px] 
                left-[190px]">
                        {name}
                    </p>

                </div>
            </Link>
        </>
    )
}