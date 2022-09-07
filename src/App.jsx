import './App.css';
import Icon from './assets/Icon';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Input type="Email" placeholder="Placeholder" startIcon={Icon} />
      <Input type="Email" placeholder="Placeholder" />
    </div>
  );
}

export default App;
