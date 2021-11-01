import { ITransaction } from "../context/reducer"
import { formatKey } from "./transaction"

const UnconfirmedTx = ({unconfirmedTxData}: {unconfirmedTxData: ITransaction}) => {
    const from = unconfirmedTxData.transactionInputs[0].UTxOID.Address
    var to = ""
    var toAmount = 0
    var change = 0
    
    for (var output in unconfirmedTxData.transactionOutputs){
        if (from == unconfirmedTxData.transactionOutputs[output].Address){
            change = unconfirmedTxData.transactionOutputs[output].Amount
        }else{
            to = unconfirmedTxData.transactionOutputs[output].Address
            toAmount = unconfirmedTxData.transactionOutputs[output].Amount
        }
    }
    
    return(
        <div className="border border-black w-11/12 h-24 mb-10 bg-white">
            <div className="p-2">
                from: {formatKey(unconfirmedTxData.transactionInputs[0].UTxOID.Address)}  change: {change}
            </div>
            <div className="p-2">
                to: {formatKey(to)}  amount: {toAmount}
            </div>
        </div>
    )
}

export default UnconfirmedTx