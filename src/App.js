
import './App.css';
import { Button, Fancy, Box } from './Button';

function App() {
  return (
    <div className="App">
      <Button variant = "outline">STYLEDD</Button>
      <Fancy>FANCY</Fancy>
      <Box>
        <Button>BUTTON IN DIV</Button>
      </Box>
    </div>
  );
}

export default App;
