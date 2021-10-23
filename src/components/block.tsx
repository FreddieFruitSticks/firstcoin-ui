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
  last: boolean;
  direction: Direction;
}

const Block = ({blockData, last, direction}: IBlockProps) => {
   const [expand, setExpand] = useState(false)
   
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-5/12 transform transition duration-500 hover:scale-105 flex flex-col items-center">
        <AnimateHeight
          duration={ 500 }
          height={ expand ? 'auto': 150}
          className="w-full border-2 border-trendyGrey rounded-lg animate__animated animate__rubberBand"
        >
        <div onClick={() => setExpand(!expand)} className=" cursor-pointer">
            <div className={`rounded text-trendyGrey bg-trendyGreen tran block p-2 overflow-hidden`}>
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

          {/* {!displayArrow && <img className="" src={'minecoin.gif'} alt="loading..." />} */}

        </div>
        </AnimateHeight>
        </div>
        
        {direction == Direction.Forwards &&
          !last && <span className="arrow arrow-down"></span>
        }
      </div>
      

        
    )
}

export default Block