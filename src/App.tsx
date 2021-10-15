import './App.css';
import Header from './components/header'
import { connect } from './context/connector';
import { Context } from './context/context-provider';
import Blockchain from './components/blockchain';

function App({state, dispatch}: Context) {
  return (
    <div >
      <Header {...{state, dispatch}}/>
      <div className="pa4">
        <Blockchain {...{state, dispatch}}/>
      </div>
    </div>
  );
}

export default connect(App);
