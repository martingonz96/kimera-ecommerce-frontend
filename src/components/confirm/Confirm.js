import { Confirm as ConfirmSU } from "semantic-ui-react";

function Confirm(props) {
  //title, text

  const { ...rest } = props;
  return <ConfirmSU className="confirm" size="mini" {...rest}></ConfirmSU>;
}

export default Confirm;
