import CoverComp from "@/components/covercomp";

export default function Page() {
    return (
        <>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
            <div className="m-16">
            <CoverComp name="Invoice Generator" link="/invoice" image="shape.svg" id={1} />
        </div>
        </div>
        </>
    )
}