import {Context} from '../context/context-provider'

const Header = ({state, dispatch}: Context) => {

    return(
        <header className='tc pv4 pv5-ns'>
            <h1 className='f4'>Firstcoin</h1>
            <h2 className='f6 gray fw2 ttu tracked'>Freddie O'Donnell</h2>
            <h2 className='f6 gray fw2 ttu tracked'>Cape Town</h2>
        </header>
    )
}

export default Header