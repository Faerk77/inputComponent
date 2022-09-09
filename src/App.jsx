import { useState } from 'react';
import './App.css';
import Icon from './assets/Icon';
import Input from './components/Input';

function App() {
  const [input, setInput] = useState('Text');

  return (
    <div className="App">
      <header>
        <h1 className="title">Inputs</h1>
      </header>
      <Input
        type="Text"
        text="Label"
        placeholder="Placeholder"
        value={input}
        onChange={(ev) => {
          setInput(ev.target.value);
        }}
      />
      <Input type="Text" text="Label" placeholder="Placeholder" error />
      <Input type="Text" text="Label" placeholder="Placeholder" disabled />
      <Input
        type="Text"
        text="Label"
        helperText="Some interesting text"
        placeholder="Placeholder"
        error
      />
      <Input
        type="Text"
        text="Label"
        placeholder="Placeholder"
        startIcon={Icon}
      />
      <Input
        type="Text"
        text="Label"
        placeholder="Placeholder"
        endIcon={Icon}
      />
      <Input multiline cols="8" row="8" />
    </div>
  );
}

export default App;
