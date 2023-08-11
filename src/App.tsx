import React, { useEffect, useState } from 'react';
import './App.css';
import { ExamplePage, MouseGearSetViewer, PositionedGearSetViewer } from '@dromney/react-gear-gen';
import { Gear, GearSet, ExampleGears } from '@dromney/gear-gen';

function App() {
  const [gearSet1, setGearSet1] = useState<GearSet>()
  useEffect(() => {
    setGearSet1(new GearSet(ExampleGears()))
  }, [])

  return (
    <div className="container">
      <ExamplePage />
    </div>
  );
}

export default App;
