import { useState } from 'react';
import './App.css';
import EndIcon from './assets/EndIcon';
import StartIcon from './assets/StartIcon';
import Input from './components/Input';

function App() {
  const [input, setInput] = useState('Text');

  return (
    <div className="App">
      <header>
        <h1 className="title">Inputs</h1>
      </header>
      <main className="main">
        <Input type="text" text="<Input />" placeholder="Placeholder" />
        <Input
          type="text"
          text="<Input error />"
          placeholder="Placeholder"
          error
        />
        <Input
          type="text"
          text="<Input disabled/>"
          placeholder="Placeholder"
          disabled
        />
        <Input
          type="text"
          text='<Input helperText="some interesting text"/>'
          helperText="Some interesting text"
          placeholder="Placeholder"
        />
        <Input
          type="text"
          text='<Input helperText="some interesting text" error />'
          helperText="Some interesting text"
          placeholder="Placeholder"
          error
        />
        <Input
          type="text"
          text="<Input startIcon/>"
          placeholder="Placeholder"
          startIcon={StartIcon}
        />
        <Input
          type="text"
          text="<Input endIcon/>"
          placeholder="Placeholder"
          endIcon={EndIcon}
        />
        <Input
          type="text"
          text='<Input value="text"/>'
          placeholder="Placeholder"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <Input
          type="text"
          text='<Input size="sm"/>'
          placeholder="Placeholder"
          size={'sm'}
        />
        <Input
          type="text"
          text='<Input size="md"/>'
          placeholder="Placeholder"
          size={'md'}
        />
        <Input
          type="text"
          text="<Input fullWidth/>"
          placeholder="Placeholder"
          fullWidth
        />
        <Input
          placeholder="Placeholder"
          text="Label"
          multiline
          cols="25"
          rows="4"
        />
      </main>

      <footer className="footer">
        <p>created by Fernando Yañez - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
