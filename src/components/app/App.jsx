import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import RandomChar from '../randomChar/RandomChar';
import decoration from '../../resources/img/Vision.png';
// import Skeleton from '../skeleton/Skeleton';

class App extends Component {

  state = {
    selectedChar: null,
  }

onCharSelected = (id) => {
  this.setState({
    selectedChar: id
  })
}

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <RandomChar />
          <div className="char__content">
            <CharList onCharSelected={this.onCharSelected}/>
            <CharInfo charId={this.state.selectedChar}/>
          </div>
          <img src={decoration} alt="Vision" className="bg-decoration" />
        </main>
      </div>
    )
  }
}

export default App;
