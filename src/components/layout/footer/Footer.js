import Link from "next/link";
import styles from "./Footer.module.scss";
import { Button, Container, Image } from "semantic-ui-react";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo-kimera3d-1.png" alt="Logo" />
            </Link>
          </div>
          <div>
            <ul>
              <Link href="/">Terminos y condiciones</Link>
              <Link href="/">Politicas de privacidad</Link>
              <Link href="/">Contacto</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="/" circular color="facebook" icon="facebook" />
            <Button as="a" href="/" circular color="twitter" icon="twitter" />
            <Button as="a" href="/" circular color="linkedin" icon="linkedin" />
            <Button as="a" href="/" circular color="youtube" icon="youtube" />
          </div>
        </div>
        <div className={styles.copyright}>
          <span>Copyright</span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
