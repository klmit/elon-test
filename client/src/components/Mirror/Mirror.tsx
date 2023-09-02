import React, { ChangeEvent } from "react";

//
import s from "./Mirror.module.scss";
import { apiRequest } from "api/api";

type Props = {
  first: string;
  value: string;
  second: string;
  uniqueid: string;
};

const allowedTextLength = 5;

export const Mirror: React.FC<Props> = ({ first, second, value, uniqueid }) => {
  const [stateValue, setStateValue] = React.useState<string>(value);
  const [showInput, setShowInput] = React.useState<boolean>(false);

  const setData = async () => {
    await apiRequest(
      "/api/rating",
      "PUT",
      JSON.stringify({
        uniqueid,
        value: stateValue,
      })
    );
  };

  const onOpenInput = (): void => {
    setShowInput(true);
  };

  const onCloseInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setShowInput(false);
      setData();
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length < allowedTextLength) {
      return setStateValue(e.target.value);
    }
  };

  return (
    <div className={s.mirror}>
      <div className={s.first}>{first}</div>
      {showInput ? (
        <input
          className={s.input}
          type="text"
          value={stateValue}
          onChange={onChangeInput}
          onKeyUp={onCloseInput}
        />
      ) : (
        <div className={s.value} onDoubleClick={onOpenInput}>
          {stateValue}
        </div>
      )}
      <div className={s.second}>{second}</div>
    </div>
  );
};
