import Header from '../src/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./Routes";
import './App.css'
import BottomButtons from './components/BottomButtons';


function App() {
  

  return (
   <div className='container-fluid '>

<Header />
<AppRoutes />

</div>
  
   
  )
}

export default App;


