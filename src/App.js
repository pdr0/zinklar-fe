import { Header } from './components/Header';
import { FilesCounter } from './components/gitHubFilesCounter/FilesCounter';
import './styles.css';

function App() {
  const { REACT_APP_ACCESS_TOKEN } = process.env;

  return (
    <div className="app">
      <Header>
        <h1>Github Extension Counter</h1>
      </Header>
      <FilesCounter token={REACT_APP_ACCESS_TOKEN} />
    </div>
  );
}

export default App;
