import './css/App.css';
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
        // BEM
    <div className="app">
      <h1></h1>

    <Sidebar/>
    <Feed className="feed"/>
    <Widgets className="widgets"/>
    </div>
  )
}

export default App;
