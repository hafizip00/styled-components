
import './App.css';
import { Button, Fancy, Box , BUTTONSUBMIT} from './Button';

function App() {
  return (
    <div className="App">
      <Button variant = "outline">STYLEDD</Button>
      <Button variant = "outline" >STYLEDD</Button>
      <Fancy>FANCY</Fancy>
      <BUTTONSUBMIT>SUBMIT</BUTTONSUBMIT>
      <Box>
        <Button>BUTTON IN DIV</Button>
  
      </Box>
    </div>
  );
}

export default App;
