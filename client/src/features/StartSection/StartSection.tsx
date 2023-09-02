import React, { useState } from "react";

//
import s from "./StartSection.module.scss";
import { Button } from "components";
import { Corners } from "components";
import { Mirror } from "components";
import { ratingBlocks } from "shared/mocks/ratingBlocks";
import { apiRequest } from "api/api";

type Data = {
  first: string;
  uniqueid: string;
  value: string;
  second: string;
};

export const StartSection: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const getData = async () => {
    const response = await apiRequest("/api/rating", "GET");

    if (response.data.length)
      setData(
        ratingBlocks.map((item, key) => {
          return {
            ...item,
            value: response.data[key].value,
            uniqueid: response.data[key].uniqueid,
          };
        })
      );
  };

  React.useEffect(() => {
    getData();
  }, []);

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
        <p style={{ color: "white" }}>
          Нажмите на цифры два раза и их можно поменять, они также меняются на
          бэк и в базе.
        </p>
        {data.length && data.map((item, key) => <Mirror {...item} key={key} />)}
      </div>
    </div>
  );
};
