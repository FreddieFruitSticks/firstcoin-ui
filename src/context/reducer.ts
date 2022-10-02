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
    scriptPubKey: string;
    value: number;
}

export interface ITxInputs{
    txid: string;
    vout: number;
    scriptSig: string;
}

export interface ITransaction{
    txid: string;
    locktime: number;
    vin: ITxInputs[];
    vout: ITxOutputs[];
    timestamp: number;
}

export interface Blockchain{
    blocks: IBlock[]
}

export enum StatusLevel {
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
    NOTICE = "NOTICE",
    BLANK = "BLANK"
  }

export interface IStatusMessage{
    message: string;
    level?: StatusLevel;
}

export interface IHostDetails {
    address: string;
    totalAmount: number;
    hostname: string;
}

export interface InitialState {
    blockchain: Blockchain;
    hostDetails: IHostDetails[];
    unconfirmedTxPool: ITransaction[];
    statusMessage: IStatusMessage;
}

export const initialState: InitialState = {
    blockchain: {
        blocks: []
    },
    hostDetails: [],
    unconfirmedTxPool: [],
    statusMessage:{
        message:""
    }
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
            
            const ipAddress = (hostname : string) => {
                return parseInt(hostname.split(":")[1])
            }
        
            const sortedHosts = clone.sort((first: IHostDetails, second: IHostDetails) => {
                if (ipAddress(first.hostname) < ipAddress(second.hostname)){
                    return -1
                }
              
                return 1
            })
                
            const newState = {
                ...state,
                hostDetails: sortedHosts,
            }
            
            return newState
        }
        
        case ActionType.CLEAR_HOSTS:{                        
            const newState = {
                ...state,
                hostDetails: []
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
        
        case ActionType.STATUS_MESSAGE:{     
            if (action.payload.message !== state.statusMessage.message && action.payload.level !== state.statusMessage.level){
                const newState = {
                    ...state,
                    statusMessage: {...action.payload}
                }
                
                return newState
            }
                               
            
            return state
        }
        
      default:
        return state;
    }
  }
  
  export default reducer