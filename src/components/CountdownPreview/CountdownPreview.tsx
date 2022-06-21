import React, { useEffect } from "react";
import styled from "styled-components";
import "../../../front-end/flipdown/flipdown.css";
import { FlipDown } from "../../helpers/flipdown";
import { useCountdown } from "../../hook/useCountdown";

type TProps = {};

const CountdownPreview: React.FC<TProps> = ({}) => {
  const { countdown } = useCountdown();
  const { bar, btn, timer } = countdown;
  const {
    beforeText,
    afterText,
    background,
    textColor,
    backgroundOnHover,
    textColorOnHover,
    enableClose,
  } = bar;
  const {
    content,
    background: btnBgColor,
    textColor: textColorBtn,
    backgroundOnHover: backgroundOnHoverBtn,
    textColorOnHover: textColorOnHoverBtn,
    enable,
    borderRadius,
    padding: paddingBtn,
  } = btn;

  const {
    startTime,
    endTime,
    background: bgTimer,
    textColor: textTimerColor,
  } = timer;

  useEffect(() => {
    console.log(
      endTime,
      startTime,
      (endTime - startTime) / 1000,
      new Date().getTime() / 1000 + 86400 * 2 + 1
    );
    new FlipDown(endTime / 1000)
      .start()

      // Do something when the countdown ends
      .ifEnded(() => {
        console.log("The countdown has ended!");
      });
  });

  const DivPreview = styled.div`
    margin: 20px 0px;
    p {
      font-weight: bold;
      padding: 10px;
    }
    border: 1px solid #fff;
    .countdown {
      background-color: ${background};
    }
    .countdown-container p {
      color: ${textColor};
    }
    .countdown:hover {
      background-color: ${backgroundOnHover};
    }
    .countdown:hover p {
      color: ${textColorOnHover};
    }
    .countdown-container::after {
      display: ${enableClose ? "block" : "none"};
    }

    .countdown .button {
      background-color: ${btnBgColor};
      color: ${textColorBtn};
      border-color: ${textColorBtn};
      border-radius: ${borderRadius};
      padding: ${paddingBtn};
    }
    .countdown .button:hover {
      background-color: ${backgroundOnHoverBtn};
      color: ${textColorOnHoverBtn};
    }

    .flipdown .rotor,
    .flipdown .rotor-top,
    .flipdown .rotor-leaf-front,
    .flipdown .rotor-bottom,
    .flipdown .rotor-leaf-rear,
    .flipdown .rotor-group:nth-child(n + 2):nth-child(-n + 3):before,
    .flipdown .rotor-group:nth-child(n + 2):nth-child(-n + 3):after {
      color: ${textTimerColor};
      background-color: ${bgTimer};
    }

    .flipdown .rotor-group-heading:before {
      color: ${textTimerColor};
    }
  `;

  return (
    <DivPreview>
      <p>Preview</p>
      <div className="countdown">
        <div className="countdown-container">
          <div className="before-text">
            <p>{beforeText}</p>
          </div>
          <div className="timer">
            <div id="flipdown" className="flipdown"></div>
          </div>
          <div className="after-text">
            <p>{afterText}</p>
          </div>
          {enable && (
            <div className="buttons">
              <a
                href="https://github.com/PButcher/flipdown#flipdown"
                className="button"
              >
                <span>{content}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </DivPreview>
  );
};

export default CountdownPreview;
