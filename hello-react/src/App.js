import logo from './logo.svg';
import './App.css';
import burgerThing from './images/burgerThing.png'
import codeLapTop from './images/codeLapTop.png'
import deskTop from './images/deskTop.png'
import ironhacklogo from './images/ironhacklogo.png'
import lapTop from './images/lapTop.png'
import wrenchNut from './images/wrenchNut.png'

function App() {
  return (
    <div className="App">

<nav className="navBar">
  <img className="ironLogo"src={ironhacklogo} alt="logo iron"/>
  <img className="menuBurger" src={burgerThing} alt="burger menu"/>
</nav>

<div className="mainSplashBox">
<h1 className="bigGreeting">
  Say hello to ReactJS
</h1>

<p className ="splashMsg">You will learn how to use the most popular front end library, and become a super Ninja devloper</p>

<button className="splashBtn">
  Awesome!
</button>

</div>


<div className="flexBoxImages">
  <div>
  <img src={codeLapTop} alt="codelaptop"/>
  <h3>Delarative</h3> 
  <p>React makes it painless to create interactive UIs.</p>
  </div>

  <div>
  <img src={deskTop} alt="desktop pc"/>
  <h3>Components</h3> 
  <p>Build encapsulated components that manage their sate.</p>
  </div> 
  
  <div>
  <img src={lapTop} alt="laptop"/>
  <h3>Single-Way</h3> 
  <p>A set of immutable values are passed to the component's.</p>
  </div> 
  
  <div>
  <img src={wrenchNut} alt="wrenchNut"/>
  <h3>JSX</h3> 
  <p>Statically-typed designed to run on modern browsers.</p>
  
  </div> 
    



 
</div>
    </div>
  );
}

export default App;
