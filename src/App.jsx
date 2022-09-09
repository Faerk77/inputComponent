import './App.css';
import Icon from './assets/Icon';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Inputs</h1>
      </header>
      <Input type="Text" text="Label" placeholder="Placeholder" />
      <Input type="Text" text="Label" placeholder="Placeholder" error />
      <Input type="Text" text="Label" placeholder="Placeholder" disabled />
      <Input type="Text" text="Label" helperText='Some interesting text' placeholder="Placeholder" error />
      <Input type="Text" text="Label" placeholder="Placeholder" startIcon={Icon} />
      <Input paddingLeft='3rem' type="Text" text="Label" placeholder="Placeholder" endIcon={Icon} />

    </div>
  );
}

export default App;
