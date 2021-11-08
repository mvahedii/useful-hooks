import React from "react";

import { useClipboard } from "useful-hooks";

const App = () => {
  const copyText = useClipboard("Hasti");
  console.log(copyText);
  return <div>Test MyuseFul Hooks</div>;
};
export default App;
