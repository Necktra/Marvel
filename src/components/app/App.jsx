// import logo from './logo.svg';
// import './App.css';
import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import RandomChar from '../randomChar/RandomChar';
import decoration from '../../resources/img/Vision.png';
// import Skeleton from '../skeleton/Skeleton';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList />
          <CharInfo />
          {/* <Skeleton /> */}

        </div>
        <img src={decoration} alt="Vision" className="bg-decoration" />
      </main>
    </div>
  )
}

export default App;
