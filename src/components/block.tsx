import 'animate.css'
import './block.css'
import {IBlock} from '../context/reducer'
import { useState } from 'react'
import Transaction from './transaction'

const Block = ({blockData}: {blockData: IBlock}) => {
   const [expand, setExpand] = useState(false)
   
    return (
      <div onClick={() => setExpand(!expand)} className="grow h4 w4 pa2 pointer">
        <div className={`Block ${!expand ? 'h4 w4 pa2' : 'h6 w5 pa2'} overflow-hidden animate__animated animate__rubberBand`}>
          <div>
            index: {blockData.index}
          </div>
          <div>
            hash: {blockData.hash.substring(0,10)}...
          </div>          
          <div>
            prev: {blockData.previousHash ? blockData.previousHash.substring(0,10) : null}
          </div>
          <div>
            difficulty: {blockData.difficultyLevel}
          </div>
          <div>
            time: {blockData.timestamp}
          </div>
          <div>
            transactions: {blockData.transactions.map((tx, index) => {
              return <Transaction key={index} txData={tx}/>
            })}
          </div>
        </div>
      </div>
        
    )
}

export default Block