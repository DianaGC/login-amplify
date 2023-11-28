import logo from './logo.svg';
import './App.css';
import Routes from "./root.component";
import { INFORMATION_PAGE } from './shared/information';

function App() {

  return (
    <body className="App">

      <header className="App-header">
        {INFORMATION_PAGE.TITLE}   
      </header>
      <main className="body">
        <Routes/>
      </main>
      <footer className='footer'> © {new Date().getFullYear()} {INFORMATION_PAGE.AUTHOR}</footer>


    </body>
  );
}

export default App;
