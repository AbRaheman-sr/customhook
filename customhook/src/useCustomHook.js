import React, { useEffect, useState } from "react";

const useCustomHook = (initialValue, ButtonName) => {
  const [count, setCount] = useState(initialValue);

  function updateCount() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log(`
The ${ButtonName} change value of count ${count}
`);
  }, [count, ButtonName]);
  return updateCount;
};

export default useCustomHook;
