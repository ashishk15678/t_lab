import { useState } from "react"

export default function InputBtn({ placeholder, className, size }: {
    placeholder: string, className?: string, size: number
}) {
    const [rows, setRows] = useState(2)
    return (
        <>
            <div className={className}>
                <div className="text-md border-2 border-gray-400/70 rounded-md ml-2">
                    <textarea className="px-3 py-1 placeholder:text-gray-400/80 text-gray-500
            border-none outline-none focus:outline-none font-serif resize-none overflow-hidden"
                        cols={15} rows={rows} expanding-textarea="" required
                        placeholder={placeholder}
                        onKeyDown={(e) => {
                            if (e.key == "Enter" && rows <= 9) {
                                setRows(rows + 1)
                            }
                        }}
                    />
                </div>
            </div>
        </>
    )
}