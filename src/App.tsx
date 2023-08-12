import './App.css';
import { ExamplePage } from '@dromney/react-gear-gen';
import '@dromney/gear-gen/dist/styles/dark.css'
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <div className="container">
      <ExamplePage isMobile={isMobile} />
    </div>
  );
}

export default App;
