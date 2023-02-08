// import logo from './logo.svg';
import './App.css';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { Navbar2 } from './component/Navbar2';
import { AllRoutes } from './Routes/AllRoutes';
// import {Provider} from "react-redux"

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar2/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
