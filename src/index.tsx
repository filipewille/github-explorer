import { createRoot } from 'react-dom/client'; //Usa esse modelo agora 
// import {render} from 'react-dom';//Usado na versão do React 17
import { App } from './App';

// render(<App />, document.getElementById('root')) // Usado na versão do React 17

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);