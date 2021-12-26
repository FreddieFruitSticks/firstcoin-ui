import { useEffect } from "react"
import { Context } from "../context/context-provider"
import { fetchControlPanel } from "../services"
import UnconfirmedTx from "./unconfirmed-tx"
import Wallet from "./wallet"

interface IControlPanel extends Context{
}

const ControlPanel = ({state, dispatch}: IControlPanel) => {
    useEffect(() => {
        fetchControlPanel(dispatch)
    },[dispatch])
    
    return (
        <div className="flex flex-col items-center border-4 border-trendyTurquoise rounded-lg fixed right-0 h-screen bottom-0 w-4/12 overflow-y-scroll">
            <div className="flex mb-16 items-center justify-center mt-10 font-trendyGrey text-3xl font-medium">
                Control Panel
            </div>
            <div className="flex mb-10 items-center justify-center font-trendyGrey text-xl font-medium">
                Global Wallets
            </div>
            {state?.hostDetails?.map((hostDetail, index) => {
                return (
                    <Wallet key={index} dispatch={dispatch} host={hostDetail.host} address={hostDetail.address} totalAmount={hostDetail.totalAmount}/>
                )
            })}
            <div className="flex mb-10 items-center justify-center font-trendyGrey text-xl font-medium">
                Unconfirmed Transaction pool
            </div>
            {state?.unconfirmedTxPool?.map((tx, index) => {
                return (
                    <UnconfirmedTx key={index} unconfirmedTxData={tx}/>
                )
            })}
        </div>
    )
}

export default ControlPanel