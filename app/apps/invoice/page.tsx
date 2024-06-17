"use client"

import { useState } from "react"

export default function Page() {
    const [invoice, setInvoice] = useState("INVOICE")
    return (
        <>

            <div className="w-full h-full bg-gray-100/50 flex items-center justify-center ">
                <div className="lg:w-[1300px] md:w-[700px] w-[600px] bg-white mt-6 border-1 border-white
         h-[100vh] box-shadow">

                    <div className="flex flex-col">


                        <div className="w-full flex lg:flex-row md:flex-row flex-col ">

                            <div className="lg:w-[250px] md:w-[200px] w-[150px] lg:h-24 md:h-24 sm:h-16 
                             border-dotted border-gray-200 lg:text-xl md:text-xl sm:text-md lg:font-extrabold font-semibold 
                            text-gray-300/90
         border-2 mt-12 ml-16 bg-gray-100/80 ">
                                <input type="file" className="w-full h-full  flex items-center justify-center" />
                                {/* <div className="w-full h-full  flex items-center justify-center"
                                    onClick={() => {

                                    }}
                                > */}
                                Your company Logo
                                {/* </div> */}
                            </div>
                            <div className="flex flex-col">
                                <div className=" lg:mt-20 md:mt-20 mt-4 lg:text-3xl md:text-2xl text-xl lg:w-[215px] md:w-[170px]
                             w-[145px] 
                            font-extrabold lg:h-12 md:h-9 h-8
                            text-gray-600/80 border-2 sm:h-8 
                             border-gray-200/90 lg:ml-[60vh] md:ml-[23vh] ml-[65px] outline-0 focus:outline-0
                              " >
                                    <input type="text" value={invoice} className="focus:border-0 "
                                        size={10} onChange={(e) => {
                                            setInvoice(e.target.value)
                                        }}
                                    />
                                </div>

                                <div className="flex flex-row mt-3 lg:text-3xl md:text-2xl text-xl  border-2 border-gray-300/50
                                lg:w-[215px] md:w-[170px] lg:ml-[60vh] md:ml-[210px] ml-16
                             w-[145px] items-center text-gray-600 ">

                                    <p className="ml-2">#</p>
                                    <input type="text" accept="number" size={7} className="px-2 text-xl outline-none 
                                    focus:outline-none w-[130px]"   />
                                </div>
                            </div>
                        </div>


                        <div className="w-full flex lg:flex-row md:flex-row flex-col ">

                            <div className="flex flex-col ">

                            </div>
                            <div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}