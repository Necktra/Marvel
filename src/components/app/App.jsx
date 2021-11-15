// import logo from './logo.svg';
// import './App.css';
import AppHeader from '../appHeader/AppHeader';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar/>
      </main>
    </div>
  )
}

export default App;
