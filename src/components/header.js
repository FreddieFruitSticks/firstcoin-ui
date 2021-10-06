import React, { useEffect } from 'react'
import {blockchainAction} from '../context/actions'

export default () => {
    useEffect(() => {
        blockchainAction()
    },[])
    return(
        <header className='tc pv4 pv5-ns'>
            <h1 className='f5 f4-ns fw6'>Firstcoin</h1>
            <h2 className='f6 gray fw2 ttu tracked'>Cape Town</h2>
        </header>
    )
}