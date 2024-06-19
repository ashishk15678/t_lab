import { useEffect, useState } from "react"

export default function Items({ id, description, qty, rate }) {

    const [Id, setId] = useState(id)

    const [Desccription, setDescription] = useState(description)
    const [Qty, setQty] = useState(qty)
    const [Rate, setRate] = useState(rate)
    const [Amount, setAmount] = useState(Rate * Qty)

    useEffect(() => {
        setAmount(Rate * Qty)
    }, [Rate, Qty])

    return (
        <>
            <div className="mt-1 w-full lg:text-xl text-md font-serif border-2 border-gray-300
              ">
                <div className="bg-gray-100/90 text-gray-600 w-full flex flex-row
                print:bg-none">

                    <div>
                        <input type="text" accept="number" size={4} value={Id} className="lg:ml-4 print:ml-2 
                        ml-2 bg-slate-200/60 print:bg-none" onChange={(e) => {
                                setId(e.target.value)
                            }} />
                    </div>

                    <div className="">
                        <input type="text" accept="text" value={Desccription} size={12} className="lg:ml-[150px]
                         ml-[25px] bg-slate-200/60 print:ml-[120px] print:bg-none"
                            placeholder="Item Description"
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />
                    </div>

                    <div className="md:ml-12">
                        <input type="text" accept="number" required value={Rate} size={8} className="lg:ml-[175px]
 md:ml-[76px]                        print:ml-[150px] ml-[40px] bg-slate-200/60 bg-none"
                            onChange={(e) => {
                                setRate(e.target.value)
                            }}

                        />
                    </div>

                    <div>
                        <input type="text" accept="number" required value={Qty} size={12} className="lg:ml-[200px]
                        print:ml-[10px] ml-[10px] bg-slate-200/60 print:bg-none"
                            onChange={(e) => {
                                setQty(e.target.value)
                            }}
                        />

                    </div>

                    <div>
                        <input type="text" accept="number" value={Amount} size={10} className="lg:ml-[35px]
                         bg-slate-200/60 print:bg-none" />
                    </div>

                </div>
            </div>
        </>
    )
}

export function AllItems({ }) {
    const [count, setCount] = useState(1)
    let amount = 0
    const [items, setItems] = useState([
        {
            id: 1, description: "", qty: 0, rate: 0, key: count,
        }
    ])


    return (<>
        <div>
            {/* TODO */}
            {items.map((i) => {
                return (
                    <>
                        <Items id={i.id} description={i.description} qty={i.qty}
                            rate={i.rate} key={count} />
                    </>
                )
            })}
        </div>
        <div>
            <button className="w-8 h-8  bg-green-400 text-white text-3xl rounded-sm flex items-center   
                                justify-center print:hidden "
                onClick={() => {
                    setItems(items.concat({ id: count + 1, description: "", qty: 0, rate: 0 }))
                    setCount(count + 1)
                }}
            >+</button>
        </div>

        <div className="h-1 w-full bg-gray-200
        print:bg-none    mt-2 text-gray-500 "></div>
        <div className="ml-8">
            <label className="text-xl font-extrabold">Total</label>
            <label className="text-xl font-extrabold p-2">{
                items.map((i) => {
                    amount = amount + (i.rate + i.qty)
                })
            }

            </label>
            <br />
            <label htmlFor="Discount" className=" text-xl font-extrabold">Discount</label>
            <input type="text" accept="number" id="Discount" className="text-xl font-bold
                                ml-10   border-1 border-gray-400 rounded-md  p-2"
                placeholder="Discount percentage" />
        </div>
    </>
    )
}