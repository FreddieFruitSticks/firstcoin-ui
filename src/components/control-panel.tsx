import { useEffect, useRef } from "react"
import { Context } from "../context/context-provider"
import { fetchControlPanel } from "../services"
import UnconfirmedTx from "./unconfirmed-tx"
import Wallet from "./wallet"
import Header from './header'

interface IControlPanel extends Context{
}

const ControlPanel = ({state, dispatch}: IControlPanel) => {
    useEffect(() => {
        fetchControlPanel(dispatch)
    },[dispatch])

    const messagesEndRef = useRef<any>(null)

    const scrollToBottom = () => {
        if (state?.unconfirmedTxPool.length > 0){
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    useEffect(scrollToBottom, [state?.unconfirmedTxPool]);
    
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
                    <Wallet index={index} key={index} dispatch={dispatch} host={hostDetail.hostname} address={hostDetail.address} totalAmount={hostDetail.totalAmount}/>
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
            <div ref={messagesEndRef}/>
        </div>
    )
}

export default ControlPanel