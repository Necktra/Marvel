// import logo from './logo.svg';
// import './App.css';
import AppHeader from '../appHeader/AppHeader';
import CharList from '../charList/CharList';
import RandomChar from '../randomChar/RandomChar'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList/>
          {/* <CharInfo/> */}
          <div ></div>
        </div>
      </main>
    </div>
  )
}

export default App;
