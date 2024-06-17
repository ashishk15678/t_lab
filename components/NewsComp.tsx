import { useEffect } from "react"

const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=82a43cb5b8e24a5887704e3047191494"


export function MobileNews() {

    var data;

        const f = async () => {
            const fet = (await fetch(url)).json()
            console.log("from use effect : " + await fet)
            data = await fet
        }
        f()


    console.log("DATA:" + data)

    return (
        <>
            <div>

            </div>
        </>
    )
}