import {Context} from '../context/context-provider'

const Header = ({state, dispatch}: Context) => {

    return(
        <div className="bg-background2 flex flex-col items-center h-24 border-b border-grey mb-10">
            <div className="text-trendyBlue font-bold text-xl">Firstcoin</div>
            <div className="text-trendyGrey font-bold">Freddie O'Donnell</div>
            <div className="text-trendyGrey">Cape Town</div>
        </div>
    )
}

export default Header