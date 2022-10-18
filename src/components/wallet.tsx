import { useState, useRef, useEffect } from 'react'
import { IAction, statusMessageAction } from '../context/actions'
import { spendCoinRelay } from '../services'
import { formatKey } from './transaction'
import { fetchControlPanel } from "../services"

import './wallet.css'
import { StatusLevel } from '../context/reducer'

interface IWallet{
    colour?: string;
    address: string;
    totalAmount: number;
    host: string;
    dispatch: React.Dispatch<IAction<any>>;
    index: number
}

const Wallet = ({index, host, address, totalAmount, dispatch}: IWallet) => {
    const [to, setTo] = useState("")
    const [amount, setAmount] = useState(0)
    const copy = () => {
        navigator.clipboard.writeText(address)
    }
    const pay = async () => {
        try{
            const response = await spendCoinRelay(host, to, amount)
            fetchControlPanel(dispatch)
            setTo("")
            setAmount(0)
        }catch(e: any){
            dispatch(statusMessageAction({
                level: StatusLevel.ERROR,
                message: e
            }))
            console.log(e)
        }
    }

    return (
        <div className={`rounded-md text-white p-4 w-4/5 ${index == 0 ? "bg-trendyRed": "bg-trendyBlue"} mb-10`}>
            <div className="flex justify-center font-bold pb-4">
                {index == 0 ? "Miner & Wallet" : "Wallet"}
            </div>
            <div className="flex w-full justify-between pb-4 items-center">
                <div >
                    address: {formatKey(Buffer.from(address, 'base64').toString('ascii'))}
                </div>

                <button onClick={copy} className={`h-10 w-16 ml-2 bg-trendyYellow text-white flex justify-center focus:ring-4 focus:ring-white items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold rounded`}>
                    Copy
                </button>
            </div>
            <div className="mb-4 flex">
                <div className="flex align-center justify-between">
                    <div className="text-white pr-4 whitespace-nowrap flex flex-col justify-center"><div className="">Pay:</div></div>
                    <textarea value={amount ? amount: ""} onChange={(event) => setAmount(parseInt(event.target.value))} className="form-textarea mt-1 mr-2 block w-9/12 border-white overflow-hidden" rows={1} placeholder="Amount"></textarea>
                    <textarea value={to ? to : ""} onChange={(event) => setTo(event.target.value)} className="form-textarea mt-1 mr-2 block w-9/12 border-white overflow-hidden" rows={1} placeholder="To"></textarea>
                </div>
                <button onClick={pay} className={`h-10 w-16 mt-1 focus:ring-4 focus:ring-white bg-trendyYellow text-white flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold py-2 px-4 rounded`}>
                    Pay
                </button> 
            </div>
            <div>
                Balance: {totalAmount}
            </div>
        </div>
    )
}

export default Wallet