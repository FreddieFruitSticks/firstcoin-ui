import 'animate.css'
import './block.css'
import Block, { Direction } from './block'
import { useEffect } from 'react'
import { fetchBlockchain } from '../services'
import { Context } from '../context/context-provider'
import { blockchainAction } from '../context/actions'
import './style.css'
import Example from './test'

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
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-4 gap-6">
                    {state.blockchain.blocks.map((block, index) => {
                        if ((Math.floor((index)/4)+1)%2 != 0){
                            return (
                                <div key={index} className={`row-start-${Math.floor(index/4)+1} col-end-${index%4 + 1}`}>
                                    <Block direction={Direction.Forwards} displayArrow={index !== state.blockchain.blocks.length -1} blockData={block}/>
                                </div>
                            )
                        }else{
                            return (
                                <div key={index} className={`row-start-${Math.floor(index/4)+1} col-end-${4-(index)%4}`}>
                                    <Block direction={Direction.Backwards} displayArrow={index !== state.blockchain.blocks.length -1} blockData={block}/>
                                </div>
                            )
    
                        }
                    })}
                </div>
                <Example/>
                
            </div>
    )
}

export default Blockchain