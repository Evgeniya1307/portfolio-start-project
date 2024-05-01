import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './components/section/main/Main';
import { Skils } from './components/section/main/skils/Skils';

function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <Skils/>
        </div>
    );
}

export default App;



