import CoverComp from "@/components/covercomp";

export default function Page() {
    return (
        <>
        <title>Tron-Apps</title>
        <div className="ml-28 mt-16 ">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
            <CoverComp name="Invoice Generator
            " link="/invoice" image="shape.svg" id={1} />
            <CoverComp name="New Comp" link="/possess" image="" id={2} />
            <CoverComp name="New Comp" link="/possess" image="" id={2} />
            <CoverComp name="New Comp" link="/possess" image="" id={2} />
<div className="lg:mb-0 md:mb-0 mb-[150px]"></div>
        </div>
        </div>
        </>
    )
}