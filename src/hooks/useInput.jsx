import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  const onValueChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onValueChange];
}

export default useInput;
