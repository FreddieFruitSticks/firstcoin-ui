import React, { ReactChild, useReducer } from 'react'
import { IAction } from './actions'
import reducer, { InitialState, initialState } from './reducer'

export interface Context {
    state: InitialState,
    dispatch: React.Dispatch<IAction<any>>
}

export const GlobalStateContext = React.createContext<Context>({
    state: initialState,
    dispatch: (action: IAction<any>) => console.warn(`WARNING! Dispatch function not set. Attemting to dispatch ${action}`)
})

const FirstcoinStateProvider = ({children}:{children: ReactChild}) => {
    let localState = {}
    
    let [state, dispatch] = useReducer(reducer, {...initialState, ...localState})
    console.log("-------------state after-----------------")
    console.log(state)
    
    return (
        <GlobalStateContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export default FirstcoinStateProvider