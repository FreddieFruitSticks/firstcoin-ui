import { formatKey } from './transaction'
import './wallet.css'

interface IWallet{
    colour?: string;
    publicKey: string;
    totalAmount: number;
}

const Wallet = ({publicKey, totalAmount}: IWallet) => {
    const copy = () => {}
    return (
        <div className="rounded-md text-white p-4 min-h-100 w-4/5 bg-trendyBlue mb-10">
            <div className="justify-content flex space-x-4 pb-4">
                <div className="flex items-center">
                    <div>
                        user {formatKey(publicKey)}
                    </div>
                </div>
                <div onClick={copy} className={`h-10 w-16 bg-trendyYellow text-white flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold py-2 px-4 rounded`}>
                    Copy
                </div> 
                
            </div>
            <div className="mb-4 flex">
                <div className="flex align-center space-between">
                    <div className="text-white pr-4 whitespace-nowrap flex flex-col justify-center"><div className="">Pay:</div></div>
                    <textarea className="form-textarea mt-1 mr-2 block w-9/12 border-white overflow-hidden" rows={1} placeholder="Amount"></textarea>
                    <textarea className="form-textarea mt-1 mr-2 block w-9/12 border-white overflow-hidden" rows={1} placeholder="To"></textarea>

                </div>
                <div onClick={copy} className={`h-10 w-16 mt-1 bg-trendyYellow text-white flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold py-2 px-4 rounded`}>
                    Pay
                </div> 
            </div>
            <div className="justify-content flex space-x-4 pb-4">
                <div className="flex items-center">
                    <div>
                        Balance: 
                    </div>
                </div>
                <div>
                    {totalAmount}
                </div> 
                
            </div>
        </div>
    )
}

export default Wallet