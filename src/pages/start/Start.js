import React from "react";
import styles from "./Start.module.css";
import { LOGO } from "../../components/header/Logo";
import { Link } from "react-router-dom";
import ActionButton from "../../components/button/actionButton/ActionButton";
import Numbers from "../../components/button/actionButton/Numbers";

const Start = () => {
  return (
    <div className={styles.start_page} style={{ overflowX: "hidden" }}>
      <div className={styles.Start_page_secondBox}>
        <LOGO />
        <a
          className={styles.toInvsto}
          target="_blank"
          href="https://www.invsto.com/"
        >
          <h1 className={styles.second_box_heading}>An Invsto Product</h1>
        </a>
        <Link to="/home" className="link">
          <ActionButton
            buttonText="Start BUIDLing"
            textColor="var(--whiteColor)"
            backgroundColor="var(--brandColor)"
          />
        </Link>
      </div>
      <div className={styles.Start_page_aside}>
        <div className={styles.Start_page_firstBox}>
          <h1 className={styles.First_box_heading}>Features :</h1>
          <div className={styles.Start_page_firstBox_points}>
            <ul>
              <li className={styles.points}>
                Volatility based price forecasting
              </li>
              <li className={styles.points}>Technical Analysis Indicators</li>
              <li className={styles.points}>Trade Statistics</li>
            </ul>
          </div>
        </div>
        <div className={styles.Start_page_thirdBox}>
          <h1 className={styles.Start_page_thirdBox_heading}>
            Crypto tradingsim makes price simulations and strategy based forward
            testing easy!
          </h1>
          <div>
            <h1 className={styles.third_heading}>
              <Numbers num={1} />
              <span className={styles.third_text}>Simulate crypto prices</span>
            </h1>
            <h1 className={styles.third_heading}>
              <Numbers num={2} />
              <span className={styles.third_text}>Build strategy entries</span>
            </h1>
            <h1 className={styles.third_heading}>
              <Numbers num={3} />
              <span className={styles.third_text}>Build strategy exits</span>
            </h1>
            <h1 className={styles.third_text_result}>
              . . . and view results!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
