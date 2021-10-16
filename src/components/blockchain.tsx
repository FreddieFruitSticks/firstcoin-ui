import 'animate.css'
import './block.css'
import Block from './block'
import { useEffect } from 'react'
import { fetchBlockchain } from '../services'
import { Context } from '../context/context-provider'
import { blockchainAction } from '../context/actions'
import './style.css'

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
        <div className="flex bg-black">
            {state.blockchain.blocks.map((block, index) => {
                return (
                    <div className="flex">
                        <Block displayArrow={index !== state.blockchain.blocks.length -1} key={index} blockData={block}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Blockchain