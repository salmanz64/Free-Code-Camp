import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <label className="slider">
        <input type="range" className="level" />
        <svg
          className="volume"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xlink="http://www.w3.org/1999/xlink"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          style={{ enableBackground: "new 0 0 512 512" }}
          space="preserve"
        >
          <g>
            <path
              d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"
              fill="currentColor"
              data-original="#000000"
            />
            <path
              d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z"
              fill="currentColor"
              data-original="#000000"
            />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* level settings 👇 */

.slider {
  /* slider */
  --slider-width: 100%;
  --slider-height: 6px;
  --slider-bg: rgb(82, 82, 82);
  --slider-border-radius: 999px;
  /* level */
  --level-color: #fff;
  --level-transition-duration: .1s;
  /* icon */
  --icon-margin: 15px;
  --icon-color: var(--slider-bg);
  --icon-size: 25px;
}

.slider {
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.slider .volume {
  display: inline-block;
  vertical-align: top;
  margin-right: var(--icon-margin);
  color: var(--icon-color);
  width: var(--icon-size);
  height: auto;
}

.slider .level {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--slider-width);
  height: var(--slider-height);
  background: var(--slider-bg);
  overflow: hidden;
  border-radius: var(--slider-border-radius);
  -webkit-transition: height var(--level-transition-duration);
  -o-transition: height var(--level-transition-duration);
  transition: height var(--level-transition-duration);
  cursor: inherit;
}

.slider .level::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0;
  height: 0;
  -webkit-box-shadow: -200px 0 0 200px var(--level-color);
  box-shadow: -200px 0 0 200px var(--level-color);
}

.slider:hover .level {
  height: calc(var(--slider-height) * 2);
}
`;

export default Input;
