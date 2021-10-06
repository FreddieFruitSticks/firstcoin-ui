import React, { useReducer } from 'react'
import reducer, { InitialState, initialState } from './reducer'

export interface Context {
    state: InitialState,
    dispatch?: React.Dispatch<any>
}

export const GlobalStateContext = React.createContext<any>({
    state: initialState
})

const NoddyStateProvider = ({children}:{children: any}) => {
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

export default NoddyStateProvider