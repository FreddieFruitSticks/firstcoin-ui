import './App.css';
import Header from './components/header'
import { connect } from './context/connector';
import { Context } from './context/context-provider';
import Blockchain from './components/blockchain';
import ControlPanel from './components/control-panel';
import StatusMessage from './components/status-message';
import React, {useEffect, useState} from "react";
import MyModal from './components/modal';

function App({state, dispatch}: Context) {
  return (
    <div className="bg-background">
      <div className="w-8/12">
        {useCheckMobileScreen() &&
          <MyModal/>
        }
        <StatusMessage {...{state, dispatch}}/>
        <Header {...{state, dispatch}}/>
        <div className="pt-28">

        <Blockchain {...{state, dispatch}}/>
        </div>
      </div>
      <ControlPanel {...{state, dispatch}}/>
    </div>
  );
}



const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}


export default connect(App);
