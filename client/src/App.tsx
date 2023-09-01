import React from "react";

//
import { TestPage } from "pages";
import { HomePage } from "pages";
import { Button } from "components/Button/Button";
import s from "./App.module.scss";

function App() {
  const [isDev, setIsDev] = React.useState<boolean>(true);

  const setDevMode = (): void => {
    setIsDev(!isDev);
  };

  return (
    <div className="App">
      <div>{isDev ? <TestPage /> : <HomePage />}</div>
      <Button
        type="button"
        className={s.floatBtn}
        onClick={setDevMode}
        text={isDev ? "On" : "Off"}
      />
    </div>
  );
}

export default App;
