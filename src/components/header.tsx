import {Context} from '../context/context-provider'

const Header = ({state, dispatch}: Context) => {

    return(
        <header className="">
            <h1 className="">Firstcoin</h1>
            <h2 className="">Freddie O'Donnell</h2>
            <h2 className="">Cape Town</h2>
        </header>
    )
}

export default Header