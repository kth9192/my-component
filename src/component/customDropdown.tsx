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
    <Fragment>
      <TestBtn onClick={selectorReveal}></TestBtn>
      <DropDownBody activated={activate}>
        <DropdownItem onClick={selectorReveal}>1</DropdownItem>
        <DropdownItem onClick={selectorReveal}>2</DropdownItem>
      </DropDownBody>
    </Fragment>
  );
};

const TestBtn = styled.button`
  width: 100px;
  height: 50px;
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
  transition: visibility 0.2s linear;
  animation: ${(props) => (props.activated ? fadeIn : fadeOut)} 0.2s linear;
  margin: 0;
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
