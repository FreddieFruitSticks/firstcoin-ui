import { ITransaction } from "../context/reducer"
import { formatKey } from "./transaction"

const UnconfirmedTx = ({unconfirmedTxData}: {unconfirmedTxData: ITransaction}) => {
    return(
        <div className="border border-black w-11/12 mb-10 bg-white">
            <div className="p-2">
                <span className="font-bold">In tx:</span>{formatKey(unconfirmedTxData.vin[0].txid)}
            </div>
            <div className="p-2">
                <span className="font-bold">pay to:</span> {formatKey(Buffer.from(unconfirmedTxData.vout[0].scriptPubKey, 'base64').toString('ascii'))}  <span className="font-bold">amount: </span>{unconfirmedTxData.vout[0].value}
            </div>
            <div className="p-2">
                 {unconfirmedTxData?.vout[1]&&
                     <>
                        <span className="font-bold">pay from:</span> {formatKey(Buffer.from(unconfirmedTxData?.vout[1]?.scriptPubKey, 'base64').toString('ascii'))}  <span className="font-bold">tx out: </span>{unconfirmedTxData?.vout[1]?.value}
                     </>
                }
            </div>
        </div>
    )
}

export default UnconfirmedTx