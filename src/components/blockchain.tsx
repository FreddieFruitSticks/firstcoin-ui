import 'animate.css'
import './block.css'
import Block, { Direction } from './block'
import { useEffect } from 'react'
import { fetchBlockchain, mineBlock } from '../services'
import { Context } from '../context/context-provider'
import { blockAction, blockchainAction, IAction } from '../context/actions'
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
        <div className="grid grid-cols-1 gap-4">
            {state.blockchain.blocks.map((block, index) => {
                return (
                    <Block direction={Direction.Forwards} last={index === state.blockchain.blocks.length - 1} blockData={block}/>
                )
            })}
            <Button dispatch={dispatch}/>
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
        <div onClick={mine} className={`h-24 w-36 flex justify-center items-center border-2 transform transition duration-500 hover:scale-105 cursor-pointer bg-transparent hover:bg-fadedBlue text-fadedBlue font-semibold hover:text-white py-2 px-4 border border-fadedBlue hover:border-transparent rounded`}>
            Mine
        </div> 
    )
}

export default Blockchain