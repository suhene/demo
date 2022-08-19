
import './App.css';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import { Cart } from './component/Cart';
import { UseDataContext } from './component/dataContext';
function App() {
  const {useData} = UseDataContext();
  return (
    
     <div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
          {useData.map(el => <Cart data={el}/>)} 
        </div>
      </div>
    
  );
}

export default App;
