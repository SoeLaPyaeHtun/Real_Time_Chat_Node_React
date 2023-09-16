import './App.css';
import { BrowserRouter } from 'react-router-dom'
import './pg-trans.css'
import NavL from './Components/NavL';
import { AuthContextProvider } from './Context/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <NavL />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
