import { ActionType, IAction } from './actions';

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
    blockchain: Blockchain
} 

export const initialState: InitialState = {
    blockchain: {
        blocks: []
    }
}


const reducer : (a: InitialState, b: IAction<any>) => InitialState = (state, action) => {
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
            
        
        
      default:
        return state;
    }
  }
  
  export default reducer