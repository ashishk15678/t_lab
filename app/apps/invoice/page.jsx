"use client"

import InputBtn from "@/components/inputBtn"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BsDownload } from "react-icons/bs"
import Items, { AllItems } from "@/components/items"

export default function Page() {

    // useEffect(()=>{
    //     window.addEventListener(('on')=>{

    //     })
    // })

    const [invoice, setInvoice] = useState("INVOICE")
    const [image, setImage] = useState("")

    //console.log(image)
    useEffect(() => {
        const val = window.localStorage.getItem("img")
        //console.log("FROM USEFFECT : ", val)
        if (val) {
            setImage(`data:image/jpeg;base64,${val}`)
        }
    }, [])




    return (
        <>
            <title>Invoice</title>
            {/* 
            <div className="hidden print:flex print:absolute" id="warn">
                <h1>WELP , SMART!!</h1>
            </div> */}

            <div className="w-full h-full bg-gray-100/50 flex items-center justify-center
         lg:ml-0 md:ml-0 ml-20 print:ml-0" id="mainParent">

                <div className="lg:w-[1300px] md:w-[700px] w-[700px] bg-white mt-6 border-1 border-white
         h-[100vh] box-shadow my-invoice">

                    <div className="flex flex-col w-full ml-8">


                        <div className="w-full flex lg:flex-row md:flex-row flex-col invoice-parent
                        ml-10 ">


                            <div className="lg:w-[250px] md:w-[200px] w-[75px] lg:h-14 md:h-24 h-20 
                             border-dotted border-gray-200 lg:text-xl md:text-xl text-md lg:font-extrabold 
                             font-semibold 
                            text-gray-300/90
         border-2 mt-12 bg-gray-100/80 invoice-abc ">

                                <input type="file" hidden id="CustomFile" onChange={(e) => {
                                    const file = e.target.files[0]
                                    // setImage(e.target.files[0])
                                    const reader = new FileReader()
                                    setImage(reader.readAsDataURL(file))
                                    reader.onloadend = () => {
                                        //console.log("INSIDE READER")
                                        const base64 = reader.result.replace('data:', '').replace(/^.+,/, '');
                                        window.localStorage.setItem("img", base64)
                                        //console.log("READER RESULT : ", reader.result, " And Image is ", base64)
                                        setImage(`data:image/jpeg;base64,${base64}`)
                                        //console.log(image)
                                    }

                                }} />
                                {image ? <div className="relative bg-white  print:mb-0">
                                    <button className="rounded-2xl bg-rose-500 text-white text-xl h-6 w-6 p-2
                                top-0 right-0 absolute flex items-center justify-items cross-btn"
                                        onClick={() => {
                                            window.localStorage.removeItem("img")
                                            setImage("")
                                        }} >x</button>
                                    <Image src={image} alt="Uploaded image" width={300} height={300} />
                                </div> :

                                    <label htmlFor="CustomFile" className="h-full w-full flex items-center
                                justify-center" >
                                        Your company Logo
                                    </label>}
                                {/* </div> */}
                            </div>
                            <div className="flex flex-col invoice-smtg">
                                <div className=" lg:mt-20 md:mt-22 mt-4 lg:text-3xl md:text-2xl text-xl lg:w-[215px] md:w-[170px]
                             w-[145px] 
                            font-extrabold lg:h-12 md:h-9 h-8
                            text-gray-600/80 border-2 sm:h-8 
                             border-gray-200/90 lg:ml-[60vh] md:ml-[23vh] ml-[0px] outline-0 focus:outline-0
                              invoice-label" >
                                    <input type="text" value={invoice} className="focus:border-0 invoice-label print:text-[4rem]
                                    "
                                        size={8} onChange={(e) => {
                                            setInvoice(e.target.value)
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col mt-3  lg:ml-[60vh] md:ml-[210px] ml-[0px]                             w-[145px] items-center text-gray-600 invoice-number-label ">

                                    <div className="lg:text-3xl md:text-2xl text-xl flex flex-row border-2 border-gray-300/50
                                lg:w-[215px] md:w-[170px] w-[150px] md:ml-2 lg:ml-2 ml-0 font-extrabold print:border-none
                                ">
                                        <p className="ml-2">#</p>
                                        <input type="text" accept="number" size={8} className="px-0  text-xl outline-none 
                                    focus:outline-none  text-gray-700"   />
                                    </div>

                                    <div className="right-8 flex flex-col print:flex-row
                                     text-gray-500/90 w-[150px] ml-0 mt-1
                                    print:ml-4   print:mt-4
                                "  >
                                        <label htmlFor="datedata" className="text-xl font-extrabold">Date</label>
                                        <input type="date" className=" border-2 border-gray-400/60 rounded-md 
                                    text-xl p-2 print:p-0 print:ml-2 dateclass  "
                                            id="datedata" />
                                    </div>

                                </div>




                            </div>
                        </div>


                        <div className="w-full flex lg:flex-row md:flex-row flex-col ">
                            <div className="">

                            </div>

                            <div className="flex flex-col ">




                                <div className="flex lg:flex-row md:flex-row flex-row mt-10
                                w-[225px] ml-8 inputBtn " >




                                    <div className="flex flex-col lg:mt-0 md:mt-0 mt-4 ">

                                        <label className="text-xl font-extrabold
                                    text-gray-500">Bill from:</label>
                                        <InputBtn placeholder="Shipment from:" className="mt-2" />
                                    </div>

                                    <div className="flex flex-col">

                                        <div className="lg:ml-8 md:ml-8 ml-0 lg:mt-0 md:mt-0 mt-4 ">
                                            <label className="text-xl font-extrabold
                                    text-gray-500">Bill To: </label>
                                            <InputBtn placeholder="Shipment to: " className="mt-2" />

                                        </div>
                                        {/* <div className="ml-8">     <label className="text-md
                                    text-gray-500">Ship To: </label>
                                            <InputBtn placeholder="Ship to: "
                                                className="mt-2" />

                                        </div>  */}
                                    </div>
                                    {/* <div className="ml-8">  <label className="text-md
                                    text-gray-500">Bill To: </label>
                                        <InputBtn placeholder="Ship to: (optional) " size={12} className="mt-2" />
                                    </div> */}
                                </div>
                                <br />
                            </div>
                            <div className="right-0">
                            </div>
                            {/* 
                            <button className="w-full bg-green-500 text-white
                                text-xl py-4 px-10 rounded-lg font-extrabold flex flex-row gap-x-4
                                mt-4 items-center"
                                onClick={() => {
                                    window.print()
                                }}>DOWNLOAD <BsDownload className="text-white" /> </button>
 */}



                        </div>


                    </div>


                    <div className="flex flex-col mt-20  w-full h-full print:mt-0">
                        <div className="mx-6">

                            <div className="bg-gray-200/80 border-2 border-gray-300
                             h-10 w-full lg:text-xl text-sm font-extrabold ml-8">
                                <div className="p-2 ">
                                    <label className="ml-6">Sr no.</label>
                                    <label className="ml-6 print:ml-[150px]
                                      lg:ml-[175px]">Description</label>
                                    <label className=" ml-[20px] md:ml-[150px] print:ml-[145px] lg:ml-[275px]">Rate</label>
                                    <label className="ml-10 md:ml-16 lg:ml-[220px]">Quantity</label>
                                    <label className="ml-16 lg:ml-[120px] ">Amount</label>
                                </div>
                            </div>

                            <AllItems />


                            <div className="flex flex-row">
                                <button className="px-6 py-2 bg-green-500 text-white w-[250px]
                                print:hidden"
                                    onClick={() => {

                                        // showing body
                                        // document.getElementById("warn").classList.remove("print:flex")
                                        // document.getElementById("warn").classList.add("print:hidden")
                                        // document.getElementById("mainParent").classList.remove("print:hidden")

                                        //print
                                        window.print()

                                        //hiding body
                                        // document.getElementById("warn").classList.add("print:flex")
                                        // document.getElementById("warn").classList.remove("print:hidden")
                                        // document.getElementById("mainParent").classList.add("print:hidden")

                                    }}>Download</button>

                                <button className="px-6 py-2 bg-green-500 text-white w-[250px] ml-8
                                print:hidden" onClick={() => {
                                        document.getElementById("amountlabel").innerText = "Amount"
                                    }}>Amount</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}