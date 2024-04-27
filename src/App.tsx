import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/header/section/main/Main';
import { FlexWrapper } from './components/FlexWrapper';

function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
        </div>
    );
}

export default App;



