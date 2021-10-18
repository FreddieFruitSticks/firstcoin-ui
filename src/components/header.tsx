import {Context} from '../context/context-provider'

const Header = ({state, dispatch}: Context) => {

    return(
        <div className="flex flex-col items-center h-48">
            <div className="text-black font-bold text-xl">Firstcoin</div>
            <div className="text-grey font-bold">Freddie O'Donnell</div>
            <div className="text-grey">Cape Town</div>
        </div>
    )
}

export default Header