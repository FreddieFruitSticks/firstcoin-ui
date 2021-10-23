import './wallet.css'

interface IWallet{
    colour?: string;
    publicKey?: string
}

const Wallet = ({colour}: IWallet) => {
    return (
        <div className="rounded-md text-white p-4 min-h-100 w-4/5 bg-trendyBlue mb-10">
            <div>
                user abcxyz
            </div>
            <div className="">
            <div className="flex align-center space-between">
                <div className="text-white mr-4 flex flex-col justify-center"><div className="">Pay to:</div></div>
                <textarea className="form-textarea mt-1 block w-9/12 border-white overflow-hidden" rows={1} placeholder="Public key..."></textarea>
            </div>
            </div>
        </div>
    )
}

export default Wallet