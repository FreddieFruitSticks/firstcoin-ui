import 'animate.css'
import './block.css'
import {IBlock} from '../context/reducer'
import { useState } from 'react'
import Transaction from './transaction'
import '../styles/theme.css'
import AnimateHeight from 'react-animate-height';

export enum Direction {
  Backwards,
  Forwards
}

interface IBlockProps{
  blockData: IBlock; 
  displayArrow: boolean;
  direction: Direction;
}

const Block = ({blockData, displayArrow, direction}: IBlockProps) => {
   const [expand, setExpand] = useState(false)
   
    return (
      <div className="transform transition duration-500 hover:scale-105 ">
        <AnimateHeight
        id='example-panel'
        duration={ 500 }
        height={ expand ? 'auto': 150}
      >
        <div onClick={() => setExpand(!expand)} className="cursor-pointer flex">
          {direction == Direction.Backwards &&
            displayArrow && <span className="arrow arrow-left"></span>
          }
            <div className={`tran block px-2 ${!expand ? 'w-44' : 'w-80'} overflow-hidden animate__animated animate__rubberBand`}>
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
          {direction == Direction.Forwards &&
            displayArrow && <span className="arrow arrow-right"></span>
          }
          {/* {!displayArrow && <img className="" src={'minecoin.gif'} alt="loading..." />} */}

        </div>
        </AnimateHeight>
      </div>
      

        
    )
}

export default Block