import React, { useState, MouseEvent, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {};

type State = {};

const DropDown = () => {
  const [activate, setActivated] = useState<boolean>(false);

  const selectorReveal = (event: MouseEvent) => {
    setActivated(!activate);
  };

  return (
    <Cover>
      <DropdownCover onClick={selectorReveal}></DropdownCover>
      <DropDownBody activated={activate}>
        <DropdownItem onClick={selectorReveal}>1</DropdownItem>
        <DropdownItem onClick={selectorReveal}>2</DropdownItem>
      </DropDownBody>
    </Cover>
  );
};

const Cover = styled.div`
  display: flex;
`;

const DropdownCover = styled.div`
  width: 100px;
  height: 50px;
  border: 2px solid #bcbcbe;
  cursor: pointer;
  border-radius: 5px;
`;

const DropDownBody = styled.div<{ activated: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100px;
  min-height: 50px;
  height: fit-content;
  position: absolute;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  visibility: ${(props) => (props.activated ? 'visible' : 'hidden')};
  transition: visibility 0.1s linear;
  animation: ${(props) => (props.activated ? fadeIn : fadeOut)} 0.1s linear;
  margin: 0;
  background: white;
`;

const DropdownItem = styled.div`
  display: flex;
  height: 50px;
  margin: 0;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export default DropDown;
