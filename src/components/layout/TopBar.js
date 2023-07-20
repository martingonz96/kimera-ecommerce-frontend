import Link from "next/link";
import styles from "./TopBar.module.scss";
import { Image } from "semantic-ui-react";
import Account from "./account/Account";
import Menu from "./menu/Menu";

function TopBar(props) {
  const { isopensearch } = props;
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo-kimera3d-1.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.center}>
        <Menu isopensearch={isopensearch} />
      </div>
      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}

export default TopBar;
