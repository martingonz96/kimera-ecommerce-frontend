import { Button } from "semantic-ui-react";
import styles from "./AddAddress.module.scss";
import { useState } from "react";
import BasicModal from "@/components/basicModal/BasicModal";
import { AddressForm } from "../addressForm";

export function AddAddress({ onReload }) {
  const [show, setShow] = useState(false);

  const openClose = () => {
    setShow(!show);
  };

  return (
    <div>
      <Button primary className={styles.addBtn} onClick={openClose}>
        Crear
      </Button>

      <BasicModal show={show} onClose={openClose} title={"Nueva Direccion"}>
        <AddressForm openClose={openClose} onReload={onReload} />
      </BasicModal>
    </div>
  );
}
