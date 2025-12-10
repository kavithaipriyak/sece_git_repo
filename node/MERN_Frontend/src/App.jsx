import Navbar from './components/functionalComponents/Navbar.jsx'
import './App.css'
import ClassComponent from './components/ClassComponents/ClassComponent.jsx'
function App() {
  const h1Style = {
    backgroundColor:"black",
    color:"white",
    textAlign:"center",
    padding:"10px",
    margin:"0px"
  }
  return (
    <header>
      <Navbar />
        <div>
          <h1 style={h1Style}>Welcome to JSX</h1>
          <h2 className = "h2">This is a simple react component</h2>
          <ClassComponent />
          <img src="vite.svg" alt="" style={{marginLeft: "650px",height:"200px"}} />
        </div>
    </header>
  );
}

export default App;
