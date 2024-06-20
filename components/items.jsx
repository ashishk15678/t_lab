import { useEffect, useState } from "react"

export default function Items({ id, description, qty, rate, arr }) {

    const [Id, setId] = useState(id)

    const [Desccription, setDescription] = useState(description)
    const [Qty, setQty] = useState(qty)
    const [Rate, setRate] = useState(rate)

    // console.log(arr);
    return (
        <>
            <div className="mt-1 w-full lg:text-xl md:text-md text-sm font-serif border-2 border-gray-300
              ml-8">
                <div className="bg-gray-100/90 text-gray-600  flex flex-row
                print:bg-none">

                    <div>
                        <input type="text" accept="number" size={4} value={Id} className="lg:ml-4 print:ml-2 
                        ml-8  bg-slate-200/60 print:bg-none"  />
                    </div>

                    <div className="">
                        <input type="text" accept="text" value={Desccription} size={12} className="lg:ml-[150px]
                         ml-[5px] bg-slate-200/60 print:ml-[120px] print:bg-none"
                            placeholder="Item Description"
                            onChange={(e) => {
                                // console.info(" description at id : ", id, " is ", arr[id - 1])
                                arr[id - 1].description = e.target.value
                                setDescription(e.target.value)

                            }}
                        />
                    </div>

                    <div className="md:ml-12">
                        <input type="text" accept="number" required value={Rate} size={8} className="lg:ml-[175px]
 md:ml-[76px]                        print:ml-[150px] ml-[20px] bg-slate-200/60 bg-none"
                            onChange={(e) => {
                                setRate(e.target.value)
                                arr[id - 1].rate = e.target.value
                                // console.info(" Rate at id : ", id, " is ", arr[id - 1].rate)

                            }}

                        />
                    </div>

                    <div>
                        <input type="text" accept="number" required value={Qty} size={12} className="lg:ml-[200px]
                        print:ml-[10px] ml-[10px] bg-slate-200/60 print:bg-none"
                            onChange={(e) => {
                                setQty(e.target.value)
                                arr[id - 1].qty = e.target.value

                            }}
                        />

                    </div>

                    <div>
                        <input type="text" accept="number" value={Rate * Qty} size={10} className="lg:ml-[35px]
                         bg-slate-200/60 print:bg-none" />
                    </div>

                </div>
            </div>
        </>
    )
}

export function AllItems({ }) {
    const [count, setCount] = useState(1)

    // let amount = 0


    // let arr = [{
    //     id: 1, description: "", qty: 0, rate: 0, key: count,
    // }
    // ]

    const [items, setItems] = useState([{
        id: 1, description: "", qty: 0, rate: 0, key: count,
    }
    ])



    return (<>
        <div>
            {/* TODO */}
            {items.map((i) => {
                return (
                    <>
                        <Items id={i.id} description={i.description} qty={i.qty} arr={items}
                            rate={i.rate} key={count} />
                    </>
                )
            })}
        </div>
        <div>
            <button className="w-8 h-8  bg-green-400 text-white text-3xl rounded-sm flex items-center   
                                justify-center print:hidden ml-12"
                onClick={() => {
                    // arr = arr.concat({ id: count + 1, description: "", qty: 0, rate: 0 })
                    setItems(items.concat({ id: count + 1, description: "", qty: 0, rate: 0 }))
                    setCount(count + 1)
                }}
            >+</button>
        </div >

        <div className="h-1 w-full bg-gray-200 
        print:bg-none    mt-2 text-gray-500 "></div>
        <div className="ml-16 ">
            <label className="text-xl font-extrabold">Total  </label>
            <label className="text-xl font-bold p-2 ml-20">
                <label id="amountlabel">
                    <input type="text" accept="number" id="TotalAmount" className="text-xl font-bold
                                   border-1 border-gray-400 rounded-md  p-2"
                        placeholder="Total Amount is" />

                </label>
            </label>
            <br />

            <label htmlFor="Discount" className=" text-xl font-extrabold ">Discount% </label>
            <input type="text" accept="number" id="Discount" className="text-xl font-bold
                                ml-10   border-1 border-gray-400 rounded-md  p-2"
                placeholder="Discount percentage" />
        </div>
        <div className="flex flex-row gap-x-4">
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

            <button className="px-6 py-2 bg-green-500 text-white w-[250px]
                                print:hidden"
                onClick={() => {
                    let a = 0;
                    items.map((i) => {
                        a = a + (i.qty * i.rate)
                    })
                    let discount = document.getElementById("Discount").value
                    if (discount > 0) {
                        a = a - (a * (discount / 100))
                    }
                    document.getElementById("TotalAmount").value = a
                    console.log(a)
                }}
            >Amount</button>
        </div>

    </>
    )
}