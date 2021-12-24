import { ITransaction } from "../context/reducer"
import { formatKey } from "./transaction"

const UnconfirmedTx = ({unconfirmedTxData}: {unconfirmedTxData: ITransaction}) => {
    return(
        <div className="border border-black w-11/12 h-24 mb-10 bg-white">
            <div className="p-2">
                using tx: {formatKey(unconfirmedTxData.vin[0].txid)}
            </div>
            <div className="p-2">
                pay to: {formatKey(unconfirmedTxData.vout[0].scriptPubKey)}  amount: {unconfirmedTxData.vout[0].value}
            </div>
                 {unconfirmedTxData?.vout[1]&&
                     <>
                        {formatKey(unconfirmedTxData?.vout[1]?.scriptPubKey)}  amount: {unconfirmedTxData?.vout[1]?.value}
                     </>
                }
            <div>
            </div>
        </div>
    )
}

export default UnconfirmedTx