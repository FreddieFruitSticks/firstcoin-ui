import './wallet.css'

interface IWallet{
    colour?: string;
    publicKey?: string
}

const Wallet = ({colour}: IWallet) => {
    const copy = () => {}
    return (
        <div className="rounded-md text-white p-4 min-h-100 w-4/5 bg-trendyBlue mb-10">
            <div className="justify-content flex space-x-4 pb-4">
                <div className="flex items-center">
                    <div>
                        user abcxyz
                    </div>
                </div>
                <div onClick={copy} className={`h-10 w-16 bg-trendyYellow text-white flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold py-2 px-4 rounded`}>
                    Copy
                </div> 
                
            </div>
            <div className="mb-4">
                <div className="flex align-center space-between">
                    <div className="text-white mr-4 flex flex-col justify-center"><div className="">Pay to:</div></div>
                    <textarea className="form-textarea mt-1 block w-9/12 border-white overflow-hidden" rows={1} placeholder="Public key..."></textarea>
                </div>
            </div>
            <div className="justify-content flex space-x-4 pb-4">
                <div className="flex items-center">
                    <div>
                        Balance: 
                    </div>
                </div>
                <div>
                    22
                </div> 
                
            </div>
        </div>
    )
}

export default Wallet