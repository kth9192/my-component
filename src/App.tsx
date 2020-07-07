import React from 'react';
import logo from './logo.svg';
import CustomDropdown from './component/customDropdown';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <Cover>
        <CustomDropdown />
      </Cover>
    </div>
  );
}

const Cover = styled.div`
  width: 80%;
  height: 100vh;
  margin: 3rem;
`;

export default App;
