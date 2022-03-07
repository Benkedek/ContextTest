import { useContext } from "react";
import Context from "./Context";

const Test = (props) => {
  const context = useContext(Context);
  console.log("Test is redered: ", "Context contains: ", context);
  return <>{context.a}</>;
};

export default Test;
