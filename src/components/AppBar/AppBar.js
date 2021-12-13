import React from "react";
import { ReactComponent as Img } from "../../img/image.svg";
import { ReactComponent as Vector } from "../../img/vector.svg";
import { ReactComponent as Arrow } from "../../img/arrow.svg";
import style from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div className={style.section}>
      <div className={style.section__vector}>
        <Vector className={style.vector} />
        <p className={style.section__text}>ToDo</p>
      </div>
      <div className={style.wrapper}>
        <div>
          <h2 className={style.wrapper__heading}>Tasks</h2>
        </div>
        <div className={style.wrapper__cont}>
          <h3 className={style.wrapper__text}>Leanne Graham</h3>
          <Img className={style.img} />
          <Arrow className={style.arrow} />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
