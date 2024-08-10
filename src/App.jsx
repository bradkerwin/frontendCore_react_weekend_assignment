import './App.css'
import Header from './Header';
import About from './About';
import Contact from './Contact'; 

function App() {
  const container = {
    textAlign: "center",
    border: "double 10px blue"
  }
  
  return (
    <div style= { container }>
      < Header />
      < About />
      < Contact />
    </div>
  )
}

export default App;
