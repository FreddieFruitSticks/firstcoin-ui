import './App.css';
import Header from './components/header'
import { connect } from './context/connector';
import { Context } from './context/context-provider';
import Blockchain from './components/blockchain';
import ControlPanel from './components/control-panel';

function App({state, dispatch}: Context) {
  return (
    <div className="bg-background">
      <div className="w-8/12">
      <Header {...{state, dispatch}}/>
        <Blockchain {...{state, dispatch}}/>
      </div>
      <ControlPanel {...{state, dispatch}}/>
    </div>
  );
}

export default connect(App);
