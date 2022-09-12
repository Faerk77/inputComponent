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
        type="text"
        text="Label"
        placeholder="Placeholder"
        value={input}
        onChange={(ev) => {
          setInput(ev.target.value);
        }}
      />
      <Input type="text" text="Label" placeholder="Placeholder" error />
      <Input type="text" text="Label" placeholder="Placeholder" disabled />
      <Input
        type="text"
        text="Label"
        helperText="Some interesting text"
        placeholder="Placeholder"
        error
      />
      <Input
        type="text"
        text="Label"
        placeholder="Placeholder"
        startIcon={Icon}
      />
      <Input
        type="text"
        text="Label"
        placeholder="Placeholder"
        endIcon={Icon}
      />
      <Input
        placeholder="Placeholder"
        text="Label"
        multiline
        cols="25"
        rows="4"
      />

      <footer className="footer">
        <p>
        created by Fernando Yañez - devChallenges.io
        </p>
      </footer>
    </div>
  );
}

export default App;
