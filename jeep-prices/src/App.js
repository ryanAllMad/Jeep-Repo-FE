import React from 'react';
import Container from '../src/components/Container';
//importing icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
library.add(fas, faAngleLeft, faAngleRight);


function App() {
  return (
    <div className="App">
      <header className="App-header">Jeep Prices Repo</header>
      <Container />
    </div>
  );
}

export default App;
