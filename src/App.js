import logo from './logo.svg';
import './App.css';
import HandleName from "./profile/profile"
import PropTypes from "prop-types"

function App() {
  return (
    <>
      <HandleName name="Mahdi" lastName="Krimi" profession="Student">
        <img src="SCT.png" style={{width:'120px', height:'120px', padding:'200px'}}/>
      </HandleName>
 
    </>
  );
}

export default App;

