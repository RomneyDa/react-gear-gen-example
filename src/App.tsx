import './App.css';
import { ExampleGearSet, ExamplePage } from '@dromney/react-gear-gen';
import { isMobile } from 'react-device-detect';
import './gears.css'
import { useEffect, useState } from 'react';
// import '@dromney/gear-gen/dist/styles/bluey.css'

function App() {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    window.onclick = () => {
      setToggle(!toggle)
    }
  })
  return (
    <div id="container" className={toggle ? 'blue' : ''}>
      {/* <ExampleGearSet isMobile={isMobile} /> */}
      <ExamplePage isMobile={isMobile} />
    </div>
  );
}

export default App;
