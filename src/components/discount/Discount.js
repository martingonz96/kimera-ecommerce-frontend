import classNames from "classnames";
import styles from "./Discount.module.scss";

function Discount(props) {
  const { children, className } = props;
  return (
    <span className={classNames(styles.discount, { [className]: className })}>
      {children}
    </span>
  );
}

export default Discount;
