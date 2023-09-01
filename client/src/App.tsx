import React from "react";
import "./App.css";

//
import { TestPage } from "pages";
import { HomePage } from "pages";

function App() {
  const [isDev, setIsDev] = React.useState<boolean>(true);

  return <div className="App">{isDev ? <TestPage /> : <HomePage />}</div>;
}

export default App;
