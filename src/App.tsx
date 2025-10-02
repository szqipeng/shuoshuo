import gwitter from 'gwitter';
import 'gwitter/dist/gwitter.min.css';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { GwitterConfig, config } from './config/gwitter.config';

function App() {
  const [currentConfig] = useState<GwitterConfig>(config);

  const initializeGwitter = useCallback((config: GwitterConfig) => {
    setTimeout(() => {
      try {
        const container = document.getElementById('gwitter-container');
        if (container) {
          container.innerHTML = '';
        }

        gwitter({
          container: document.getElementById('gwitter-container'),
          config,
        });
      } catch (error) {
        console.error('Failed to initialize Gwitter:', error);
        const container = document.getElementById('gwitter-container');
        if (container) {
          container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
              <h3>⚠️ Configuration Error</h3>
              <p>Please check your GitHub configuration and try again.</p>
              <p><strong>Error:</strong> ${
                error instanceof Error ? error.message : 'Unknown error'
              }</p>
            </div>
          `;
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    initializeGwitter(currentConfig);
  }, []);

  return (
    <div className="App">
      <main className="App-main">
        <div id="gwitter-container" className="gwitter-demo-container"></div>
      </main>
    </div>
  );
}

export default App;
