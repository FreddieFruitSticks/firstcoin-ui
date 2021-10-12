import 'animate.css'
import './block.css'
import {IBlock} from '../context/reducer'

const Block = ({blockData}: {blockData: IBlock}) => {
    return (
        <div className='Block h4 w4 pa2 animate__animated animate__rubberBand'>
          <div>
            index: {blockData.index}
          </div>
          <div>
            hash: {blockData.hash.substring(0,5)}...
          </div>          
          <div>
            prev: {blockData.previousHash.substring(0,5)}...
          </div>
          <div>
            difficulty: {blockData.difficultyLevel}
          </div>
          <div>
            time: {blockData.timestamp}
          </div>
          <div>
            transactions: {blockData.transactions}
          </div>
        </div>
    )
}

export default Block