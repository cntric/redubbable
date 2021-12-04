import React, { useRef, RefObject, useState } from 'react';
import logo from './logo.svg';
import { Redubbable } from './Redubbable';

function App() {

  const ref = useRef<HTMLDivElement>(null);
  const [isModaled, setModaled] = useState(false);

  return (
    <div className="App">
        <div 
        onClick={()=>{
          setModaled(!isModaled);
        }}
        ref={ref}
        style={{
          height : "100px",
          width : "100px",
          background : "pink"
        }}>

        </div>
        <Redubbable
        breadCrumbSplit="/"
        prefix="home/main/friend"
        text="hello"
        suffix="jeff/is/name"
        />
    </div>
  );
}

export default App;
