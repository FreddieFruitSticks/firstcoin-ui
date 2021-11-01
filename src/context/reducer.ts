import { ActionType, hostDetailsAction, IAction } from './actions';

export interface IBlock{
    index: number;
    previousHash: string;
    transactions: ITransaction[];
    timestamp: number;
    difficultyLevel: number;
    nonce: number;
    hash: string;
}

export interface ITxOutputs{
    Address: string;
    Amount: number;
}

export interface IUtxOID{
    Address: string;
    TxID: string;
}

export interface ITxInputs{
    UTxOID: IUtxOID;
    UTxOIndex: number;
    Signature: string;
}

export interface ITransaction{
    id: string;
    transactionInputs: ITxInputs[];
    transactionOutputs: ITxOutputs[];
    timestamp: number;
}

export interface Blockchain{
    blocks: IBlock[]
}

export interface InitialState {
    blockchain: Blockchain;
    hostDetails: IHostDetails[];
    unconfirmedTxPool: ITransaction[];
}

export interface IHostDetails {
    publicKey: string;
    totalAmount: number;
    host: string;
} 

export const initialState: InitialState = {
    blockchain: {
        blocks: []
    },
    hostDetails: [],
    unconfirmedTxPool: []
}


const reducer : (state: InitialState, action: IAction<any>) => InitialState = (state, action) => {
    console.log("-------------state before-----------------")
    console.log(state)
    console.log("----------------action--------------------")
    console.log(action)

    switch (action.type) {
        case ActionType.BLOCKCHAIN:{
            const newState = {
                ...state,
                blockchain: {
                    ...state.blockchain,
                    ...action.payload
                }
            }
            
            return newState
        }
            
        case ActionType.BLOCK:{
            const newState = {
                ...state,
                blockchain: {
                    ...state.blockchain,
                    ...action.payload
                }
            }
            
            return newState
        }
        
        case ActionType.HOST_DETAILS:{
            const clone = JSON.parse(JSON.stringify(state.hostDetails));
            clone.push(action.payload)
                        
            const newState = {
                ...state,
                hostDetails: action.payload.hostsDetails,
            }
            
            return newState
        }
        
        case ActionType.UNCONFIRMED_TX_POOL:{                        
            const newState = {
                ...state,
                unconfirmedTxPool: action.payload.pool
            }
            
            return newState
        }
        
      default:
        return state;
    }
  }
  
  export default reducer