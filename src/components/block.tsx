import 'animate.css'
import './block.css'
import {IBlock} from '../context/reducer'
import { useState } from 'react'
import Transaction from './transaction'

const Block = ({blockData, displayArrow}: {blockData: IBlock, displayArrow: boolean}) => {
   const [expand, setExpand] = useState(false)
   
    return (
      <div onClick={() => setExpand(!expand)} className="cursor-pointer	flex">
        <div className={`tran block px-2 ${!expand ? 'w-44 h-36' : 'w-80 h-auto'} overflow-hidden animate__animated animate__rubberBand`}>
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
        {displayArrow && <span className="arrow arrow-right"></span>}
        {/* {!displayArrow && <img className="" src={'minecoin.gif'} alt="loading..." />} */}

      </div>
        
    )
}

export default Block