
import 'animate.css'
import './block.css'
import {ITransaction, ITxInputs, ITxOutputs, IUtxOID} from '../context/reducer'

const Transaction = ({txData}: {txData: ITransaction}) => {
    return (
        <div className="text-xs">
            <div>
                id: {txData.id.substring(0,5)}...
            </div> 
            <div>
                timestamp: {txData.timestamp.toString().substring(0,10)}...
            </div>
            <div>
                txO: [
                        {txData.transactionOutputs.map((txO, index) => {
                            return (
                                <div key={index} className="pl2">
                                    <TxOut txOData={txO}/>
                                </div>
                            )
                    })}
                ]
            </div>
            <div>
                txIn: [
                        {txData.transactionInputs.map((txIn, index) => {
                            return (
                                <div key={index} className="pl2">
                                    <TxIn txInData={txIn}/>
                                </div>
                            )
                    })}
                ]
            </div>
        </div> 
    )
}

const TxOut = ({txOData}: {txOData: ITxOutputs}) => {
    return (
        <div>
            <div>
                Address: {formatKey(txOData.Address)}
            </div>
            <div>
                Amount: {txOData.Amount}
            </div>
        </div>
    )
}

const TxIn = ({txInData}: {txInData: ITxInputs}) => {
    return (
        <div>
            <div>
                <UTxOID uTxOIDData={txInData.UTxOID}/>
            </div>
            <div>
                UTxOIndex: {txInData.UTxOIndex}
            </div>
            <div>
                Signature: {txInData.Signature.substring(0,5)} ...
            </div>
        </div>
    )
}

const UTxOID = ({uTxOIDData}: {uTxOIDData: IUtxOID}) => {
    return (
        <div>
            <div>
                Address: {formatKey(uTxOIDData.Address)}
            </div>
            <div>
                TxID: {uTxOIDData.TxID.substring(0,5)} ...
            </div>
        </div>
    )
}

export const formatKey : (key: string) => string = (key: string) => {
    return(
        `${key.substring(0,5)}...${key.substring(52,57)}...${key.substring(key.length - 6,key.length - 1)}`
    )
}

export default Transaction