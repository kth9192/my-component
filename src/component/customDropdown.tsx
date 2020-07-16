import React, { FC, useState, MouseEvent } from 'react';
import styled, { keyframes } from 'styled-components';

interface DropdownProps {
  dropdownValues: Array<Record<string, string | number>>;
  title: string;
  handleClickItem: (event: MouseEvent) => void;
}

const DropDown: FC<DropdownProps> = (props) => {
  const [activate, setActivated] = useState<boolean>(false);
  const [title, setTitle] = useState<string | number>(props.title);

  const handleClickItem = (event: MouseEvent, title: string | number) => {
    props.handleClickItem ? props.handleClickItem(event) : null;
    setActivated(!activate);
    setTitle(title);
  };

  const handleOpen = () => {
    setActivated(!activate);
  };

  return (
    <Cover>
      <DropdownCover onClick={handleOpen}>
        <TextCover>
          <p>{title}</p>
        </TextCover>
        <DropDownBody activated={activate}>
          {props.dropdownValues.map((item: Record<string, string | number>) => {
            return (
              <DropdownItem
                onClick={(event) => handleClickItem(event, item.value)}
              >
                {item.value}
              </DropdownItem>
            );
          })}
        </DropDownBody>
      </DropdownCover>
    </Cover>
  );
};

const TextCover = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownCover = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  border: 1px solid #bcbcbe;
  cursor: pointer;
  border-radius: 5px;
  background: white;
`;

const DropDownBody = styled.div<{ activated: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100px;
  min-height: 50px;
  position: absolute;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  visibility: ${(props) => (props.activated ? 'visible' : 'hidden')};
  transition: visibility 0.2s linear;
  animation: ${(props) => (props.activated ? fadeIn : fadeOut)} 0.2s linear;
  margin: 0;
  background: white;
  z-index: 2;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0;
  padding: 1px;
  &:hover {
    background: #d3d3d3;
  }
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
