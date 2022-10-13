import {Context} from '../context/context-provider'

const Header = ({state, dispatch}: Context) => {

    return(
        <div className="bg-background2 flex flex-col items-center h-24 border-b border-grey mb-10">
            <div className="text-trendyBlue font-bold text-xl">Firstcoin</div>
            <div className="flex space-between w-full">
                <div className="w-2/6"/>
                <div className="flex text-trendyGrey justify-center font-bold w-2/6">Freddie O'Donnell</div>
                <a href="https://github.com/FreddieFruitSticks" target="_blank" className="flex justify-end w-2/6 text-trendyBlue underline font-bold"><div className='mr-10'>My Github Profile</div></a>
            </div>
            <div className="text-trendyGrey">Cape Town</div>
        </div>
    )
}

export default Header