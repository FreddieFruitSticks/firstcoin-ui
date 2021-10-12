import './App.css';
import Header from './components/header'
import { connect } from './context/connector';
import { Context } from './context/context-provider';
import Blockchain from './components/blockchain';

function App({state, dispatch}: Context) {
  return (
    <div >
      <Header {...{state, dispatch}}/>
      <Blockchain {...{state, dispatch}}/>
    </div>
  );
}

export default connect(App);
