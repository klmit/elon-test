import React from "react";

//
import s from "./StartSection.module.scss";
import { Button } from "components";
import { Corners } from "components";
import { Mirror } from "components";
import { ratingBlocks } from "shared/mocks/ratingBlocks";

export const StartSection: React.FC = () => {
  return (
    <div className={s.section}>
      <div className={s.leftBlock}>
        <div>
          <h1 className={s.titleMain}>Путешествие</h1>
          <h4 className={s.titleDesc}>На красную планету</h4>
        </div>
        <Corners
          classname={s.corner}
          content={
            <Button
              type="button"
              onClick={() => {}}
              text="Начать путешествие"
              className={s.btn}
            />
          }
        />
      </div>
      <div className={s.rightBlock}>
        {ratingBlocks.map((item, key) => (
          <Mirror {...item} key={key} />
        ))}
      </div>
    </div>
  );
};
