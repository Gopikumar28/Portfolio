import {Navigation} from './Navigation'
import {Banner} from './Banner'
import {Skills} from './Skills'
import {Experience} from './Experience'
import { Achievements } from './Achievements'
import { Footer } from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div>
       
        <Navigation/>
        <Banner/>
        <Skills/>
        <Experience/>
        <Achievements/>
        <Footer/>
    </div>
  );
}

export default App;
