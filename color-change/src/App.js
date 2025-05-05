import Form from "./Form";
import { usestate } from "react";

function App() {
  const [color, setColor]=useState('')
  const updateColor =(color) => {
    setColor(newColor)

  }
  return (
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'color'
      }
    }>
      <Form updateColor={updateColor}/>
    </div>
  );
}

export default App;
