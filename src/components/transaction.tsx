
import 'animate.css'
import './block.css'
import {ITransaction, ITxInputs, ITxOutputs} from '../context/reducer'

const Transaction = ({txData}: {txData: ITransaction}) => {
    return (
        <div className="text-xs">
            <div>
                id: {txData.txid.substring(0,5)}...
            </div> 
            <div>
                timestamp: {txData.timestamp.toString().substring(0,10)}...
            </div>
            <div>
                txO: [
                        {txData.vout.map((txO, index) => {
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
                        {txData.vin.map((txIn, index) => {
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
                scriptPubKey: {formatKey(txOData.scriptPubKey)}
            </div>
            <div>
                value: {txOData.value}
            </div>
        </div>
    )
}

const TxIn = ({txInData}: {txInData: ITxInputs}) => {
    return (
        <div>
            <div>
                txid: {txInData.txid}
            </div>
            <div>
                vout: {txInData.vout}
            </div>
            <div>
                scriptSig: {txInData.scriptSig.substring(0,5)} ...
            </div>
        </div>
    )
}

export const formatKey : (key: string) => string = (key: string) => {
    return(
        `${key.substring(0,5)}...${key.substring(20,25)}...${key.substring(key.length - 6,key.length - 1)}`
    )
}

export default Transaction