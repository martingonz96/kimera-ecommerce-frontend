import { Container, Icon } from "semantic-ui-react";
import styles from "./BarTrust.module.scss";
import { map } from "lodash";
import { data } from "./BarTrust.data";

function BarTrust() {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        {map(data, (item) => (
          <div className={styles.block}>
            <Icon name={item.icon} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default BarTrust;
