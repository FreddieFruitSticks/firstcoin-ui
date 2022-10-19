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
                    <span className='font-bold'>Address</span>: {formatKey(Buffer.from(address, 'base64').toString('ascii'))}
                </div>

                <button onClick={copy} className={`h-10 w-16 ml-2 bg-trendyYellow text-white flex justify-center focus:ring-4 focus:ring-white items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold rounded`}>
                    Copy
                </button>
            </div>
            <div className="mb-4">
                <div className="grid xl:grid-cols-1 grid-cols-3 gap-4">
                    <textarea value={amount ? amount: ""} onChange={(event) => setAmount(parseInt(event.target.value))} className="form-textarea whitespace-nowrap border-white overflow-hidden" rows={1} placeholder="Amount"></textarea>
                    <textarea value={to ? to : ""} onChange={(event) => setTo(event.target.value)} className="form-textarea block border-white overflow-hidden whitespace-nowrap" rows={1} placeholder="Recipient"></textarea>
                    <button onClick={pay} className={`h-10 focus:ring-4 focus:ring-white bg-trendyYellow text-white flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold rounded`}>
                        Pay
                    </button>     
                </div>
            </div>
            <div>
                <span className='font-bold'>Balance</span>: {totalAmount}
            </div>
        </div>
    )
}

export default Wallet