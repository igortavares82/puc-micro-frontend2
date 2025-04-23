import Home from './pages/Home';
import consumer from 'post-transport/src/consumer';
import GlobalContext from './components/GlobalContext';
import { useState, useContext, useEffect } from 'react';

function App() {
  
  const [config, setConfig] = useState();
  useEffect(() => { setTimeout(consumer('main-app-config', (data) => setConfig(data))) }, []);
  
  return (
    <GlobalContext.Provider value={config}>
      <Home />
    </GlobalContext.Provider>
  );
}

export default App;
