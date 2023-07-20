import Link from "next/link";
import styles from "./JoinLayout.module.scss";
import { Icon, Image } from "semantic-ui-react";
import useAuth from "@/hooks/useContext";
import { useRouter } from "next/router";

function JoinLayout({ children }) {
  const router = useRouter();

  const { user } = useAuth();

  if (user) {
    router.push("/");
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo-kimera3d-1.png" />
        </Link>
        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>
      <div className={styles.blockRight}></div>
    </div>
  );
}

export default JoinLayout;
