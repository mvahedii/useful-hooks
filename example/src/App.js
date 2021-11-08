import React from "react";

import { useClipboard } from "useful-hooks";

const App = () => {
  const example = useClipboard();
  return <div>{example}</div>;
};
export default App;
