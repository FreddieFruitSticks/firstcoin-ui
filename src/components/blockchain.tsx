import 'animate.css'
import './block.css'
import Block from './block'
import { useEffect } from 'react'
import { fetchBlockchain } from '../services'
import { Context } from '../context/context-provider'
import { blockchainAction } from '../context/actions'

interface IBlockchain extends Context{
}

const Blockchain = ({state, dispatch}: IBlockchain) => {
    useEffect(() => {
        async function fetchbc(){
            const chain = await fetchBlockchain()

        dispatch(blockchainAction({
            blocks: chain.blocks
        }))
        }
        

        fetchbc()

    },[dispatch])
    
    return (
        <div className="flex flex-wrap-reverse">
            {state.blockchain.blocks.map((block, index) => {
                return (
                    <Block key={index} blockData={block}/>
                )
            })}
        </div>
    )
}

export default Blockchain