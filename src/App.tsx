import './App.css';
import Header from './components/header'
import { connect } from './context/connector';
import { Context } from './context/context-provider';
import Blockchain from './components/blockchain';

function App({state, dispatch}: Context) {
  return (
    <div className="bg-background">
      <Header {...{state, dispatch}}/>
      <div>
        <Blockchain {...{state, dispatch}}/>
      </div>
    </div>
  );
}

export default connect(App);
