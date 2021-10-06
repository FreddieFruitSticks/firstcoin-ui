import React from 'react'
import { ActionType, IAction } from './actions';

export interface Block{
    
}

export interface Blockchain{
    blocks: Block[]
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