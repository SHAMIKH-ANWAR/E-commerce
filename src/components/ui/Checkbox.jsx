import React from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  return (
    <StyledWrapper>
      <label htmlFor="cbx" className="cbx">
        <div className="checkmark">
          <input defaultChecked type="checkbox" id="cbx" />
          <div className="flip">
            <div className="front" />
            <div className="back">
              <svg viewBox="0 0 16 14" height={14} width={16}>
                <path d="M2 8.5L6 12.5L14 1.5" />
              </svg>
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cbx {
    -webkit-perspective: 20;
    perspective: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -12px;
    border: 2px solid #e8e8eb;
    background: #e8e8eb;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .cbx:hover {
    border-color: #0b76ef;
  }

  .flip {
    display: block;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    position: relative;
    width: 20px;
    height: 20px;
  }

  #cbx {
    display: none;
  }

  #cbx:checked + .cbx {
    border-color: #0b76ef;
  }

  #cbx:checked + .flip {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  .front {
    background: #fff;
    z-index: 1;
  }

  .back {
    transform: rotateY(180deg);
    background: #0b76ef;
    text-align: center;
    color: #fff;
    line-height: 20px;
    box-shadow: 0 0 0 1px #0b76ef;
  }

  .back svg {
    margin-top: 3px;
    fill: none;
  }

  .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }`;

export default Checkbox;
