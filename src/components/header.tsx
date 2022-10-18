import {Context} from '../context/context-provider'
import {useState} from 'react';

const Header = ({state, dispatch}: Context) => {

    return(
        <div className="fixed z-50 w-8/12 bg-background2 flex flex-col items-center h-24 border-b border-grey mb-10">
            <div className="text-trendyBlue font-bold text-xl">Firstcoin</div>
            <div className="flex space-between w-full">
                <div className="w-2/6"><div className='ml-10'><HoverElement/></div></div>
                <div className="flex text-trendyGrey justify-center font-bold w-2/6 whitespace-nowrap">Freddie O'Donnell</div>
                <a href="https://github.com/FreddieFruitSticks" target="_blank" className="flex justify-end w-2/6 text-trendyBlue underline font-bold whitespace-nowrap"><div className='mr-10'>My Github Profile</div></a>
            </div>
            <div className="text-trendyGrey">Cape Town</div>
        </div>
    )
}

const HoverElement = ({}) => {
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (<div>
      <div>
        <div className="w-3/6 underline cursor-help whitespace-nowrap" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            How this works? 
        </div>

        {isHovering && (
          <div
            style={{
                position: 'fixed',
                zIndex: 1000,
                height: !isHovering ? 0 : 'auto'
            }} >
            <div className="bg-oliveGreen text-white border-1 rounded border-white p-2 max-w-lg">
                    This is a demonstration blockchain, and it's very simple to use! In the middle you will see the blockchain. 
                    Click on "Mine" to manually mine a block. 
                <div className='mt-3'>
                    On the right you will see the "Control Panel". This is where you can transfer coins between wallets. 
                    Click "copy" to copy the address you want to pay <b>to</b>. Select an amount you wish to pay, and click "pay". 
                    Only the first miner (coloured red) mines and is rewarded 100 coin + 1 coin per transaction. 
                </div>
                <div className='mt-3'>
                    In the control panel you will also see the unconfirmed transaction pool. It will indicate the payer, payee, transaction id used 
                    to confirm the payment, and the "vout" which is the change awarded to the payer. To confirm a transaction
                    click "Mine" to add it to the blockchain.
                </div>
                <div className='mt-3'>
                    Happy mining!
                </div>
            </div>
          </div>
        )}
      </div>
    </div>)
}

export default Header