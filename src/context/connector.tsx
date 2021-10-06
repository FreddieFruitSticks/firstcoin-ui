import React from 'react'
import {GlobalStateContext} from './context-provider'

export const connect = (Component: any) => {
    return (props: any) => (
        <GlobalStateContext.Consumer>
            {value => {
                const {state, dispatch} = value
                return (
                    <Component {...props} state={state} dispatch={dispatch}/>
                )
            }}
        </GlobalStateContext.Consumer>
    )
}