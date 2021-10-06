import './App.css';
import Header from './components/header'
import { connect } from './context/connector';

function App(props: any) {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default connect(App);
