import React, { useEffect } from "react"
import { hostDetailsAction } from "../context/actions"
import { Context } from "../context/context-provider"
import { fetchHostDetails, fetchHosts } from "../services"
import Wallet from "./wallet"

interface IControlPanel extends Context{
}

const ControlPanel = ({state, dispatch}: IControlPanel) => {
    useEffect(() => {
        async function f(){
            try{
                const hosts = await fetchHosts()
                hosts.forEach(async host => {
                    let hostDetails = await fetchHostDetails(host)
                    dispatch(hostDetailsAction({
                        publicKey: hostDetails.publicKey,
                        totalAmount: hostDetails.totalAmount,
                        host: host
                    }))
                });
                
            }catch(e){
                console.log(e)
            }
        }

        f()

    },[dispatch])
    
    return (
        <div className="flex flex-col items-center border-4 border-trendyTurquoise rounded-lg fixed right-0 h-screen bottom-0 w-4/12 overflow-y-scroll">
            <div className="flex mb-16 items-center justify-center mt-10 font-trendyGrey text-3xl font-medium">
                Control Panel
            </div>
            <div className="flex mb-10 items-center justify-center font-trendyGrey text-xl font-medium">
                Global Wallets
            </div>
            {state.hostDetails.map(hostDetail => {
                return (
                    <Wallet publicKey={hostDetail.publicKey} totalAmount={hostDetail.totalAmount}/>
                )
            })}
        </div>
    )
}

export default ControlPanel