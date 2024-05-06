import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './components/section/main/Main';
import { Skils } from './components/section/main/skils/Skils';
import { Works } from './components/works/Works';
import { Testimony } from './components/section/testimony/Testimony';
import { Contact } from './components/section/contacts/Contact';
import { Slogan } from './components/section/slogan/Slogan';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <Skils/>
          <Works/>
          <Testimony/>
          <Contact/>
          <Slogan/>
         <Footer/>
        </div>
    );
}

export default App;



