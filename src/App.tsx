import './App.css';
import { ExamplePage } from '@dromney/react-gear-gen';
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <div className="container">
      <ExamplePage isMobile={isMobile} />
    </div>
  );
}

export default App;
