import { useState } from 'react';
import './App.css';
//COMPONENTS
import Calculator from "./components/Calculator";

function App() {
  const [screen, setScreen] = useState('');
  const [theme, setTheme] = useState(0);

  // changes between themes
  function changeTheme (event) {
    let div = document.querySelector('.App');
    switch (theme) {
      case '0':
        div.setAttribute('data-theme', 'default')
        break;
      case '1':
        div.setAttribute('data-theme', 'light')
        break;
      case '2':
        div.setAttribute('data-theme', 'dark')
        break;
    
      default:
        break;
    }
  }

  return (
        <div data-theme='default' className="App" >
          <div className="calculator">
            <header>
              <span>calc</span>
              <div className="themeSwitcher">
                <div className="labelBox">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className="sliderContainer">
                  <p className="title">theme</p>  
                  <input
                    onChange={e => {setTheme(e.target.value)}} 
                    onClick={changeTheme} 
                    type="range" 
                    name="themeSelector" 
                    id="theme" 
                    min='0' 
                    max='2' 
                    value={theme}/>
                </div>
              </div>
            </header>
            <div className="display">{screen}</div>
            <Calculator screen={screen} setScreen={setScreen}/>
          </div>
        </div>
      )
}

export default App;
