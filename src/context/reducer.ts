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
    hostDetails: []
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
                hostDetails: clone,
            }
            
            return newState
        }
        
      default:
        return state;
    }
  }
  
  export default reducer