import 'animate.css'
import './block.css'
import Block from './block'
import {IBlock} from '../context/reducer'
import { useEffect } from 'react'
import { fetchBlockchain } from '../services'
import { Context } from '../context/context-provider'
import { blockchainAction } from '../context/actions'

interface IBlockchain extends Context{
}

const Blockchain = ({state, dispatch}: IBlockchain) => {
    useEffect(() => {
        async function fetchbc(){
            // const chain = await fetchBlockchain()

            dispatch(blockchainAction({
                blocks:[{
                    index:10,
                    previousHash: "*Sasd8)(Sd8asd",
                    transactions: [],
                    timestamp: 12345,
                    difficultyLevel: 5,
                    nonce: 12345,
                    hash: "asdjhfovJKDsd87"
                }]
            }))
        }
        fetchbc()

    },[])
    
    return (
        <div>
            {state.blockchain.blocks.map(block => {
                return (
                    <Block blockData={block}/>
                )
            })}
        </div>
    )
}

export default Blockchain