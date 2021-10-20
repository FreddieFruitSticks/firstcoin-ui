import React from "react"
import Wallet from "./wallet"

const ControlPanel = () => {
    return (
        <div className="flex flex-col items-center border-4 border-trendyTurquoise rounded-lg fixed right-0 h-screen bottom-0 w-4/12 overflow-y-scroll">
            <div className="flex mb-16 items-center justify-center mt-10 font-trendyGrey text-3xl font-medium">
                Global Ledger
            </div>
            <Wallet/>
            <Wallet/>
            <Wallet/>
            <Wallet/>
        </div>
    )
}

export default ControlPanel