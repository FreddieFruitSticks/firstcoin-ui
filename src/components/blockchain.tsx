import 'animate.css'
import './block.css'
import Block, { Direction } from './block'
import { useEffect, useRef } from 'react'
import { fetchBlockchain, mineBlock } from '../services'
import { Context } from '../context/context-provider'
import { blockAction, blockchainAction, IAction } from '../context/actions'
import './style.css'
import React from 'react'

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
    const messagesEndRef = useRef<any>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    
    useEffect(scrollToBottom, [state.blockchain]);
    
    return (
        <div className="">
        <div className="grid grid-cols-1 gap-4">
            {state.blockchain.blocks.map((block, index) => {
                return (
                    <Block 
                    key={index} 
                    direction={Direction.Forwards} 
                    last={index === state.blockchain.blocks.length - 1} 
                    blockData={block}
                />
                       
                )
            })}
            <div ref={messagesEndRef}/>

        </div>
        <div className="pt-10 flex justify-center items-center w-full">
            <Button dispatch={dispatch}/>
        </div>
        </div>
        
    )
}

const Button : any = ({dispatch}:{dispatch:React.Dispatch<IAction<any>>}) => {
    const mine = async () => {
        try{
            const block = await mineBlock()
            dispatch(blockAction(block))
            
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div onClick={mine} className={`h-24 w-36 bg-yellowGreen border-4 text-oliveGreen hover:text-green border-oliveGreen hover:border-green flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold py-2 px-4 rounded`}>
            Mine
        </div> 
    )
}

export default Blockchain