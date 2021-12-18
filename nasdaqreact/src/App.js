import { Component } from 'react/cjs/react.development';
import './App.css';
import Stock from './Stock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showMsg: false, maggiorenne: ''};
  }

  showMaggiorenne = (nome) => {
    this.setState({maggiorenne: nome});
  }

  render() {
    return (
      <div className='App'> 
        <header className='App-header'>
          <Stock 
            nome = 'Apple' 
            fondatore = 'Jobs' 
            eta = {17}
            showEta = {this.showMaggiorenne} />
          <Stock 
            nome = 'Google' 
            fondatore = 'Brin' 
            eta = {12}
            showEta = {this.showMaggiorenne} />
            <p>Figli Maggiorenni: {this.state.maggiorenne}</p>
        </header>
      </div>
    );
  }

}

export default App;
