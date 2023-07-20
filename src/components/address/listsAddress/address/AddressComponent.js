import { Button, Icon } from "semantic-ui-react";
import styles from "./AddressComponent.module.scss";
import { AddressForm } from "../../addressForm";
import BasicModal from "@/components/basicModal/BasicModal";
import { useState } from "react";
import Confirm from "@/components/confirm/Confirm";
import { Address } from "@/api/address";
import { add } from "lodash";

const addressCtrl = new Address();

export function AddressComponent({ address, onReload, addressId }) {
  const [showEdit, setShowEdit] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseEdit = () => {
    setShowEdit(!showEdit);
  };
  const openCloseConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const { title } = address;
  const onDelete = async () => {
    try {
      await addressCtrl.deleteAddress(addressId);
      onReload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.city}, {address.state},{" "}
            {address.postal_code}
          </p>
        </div>
        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon onClick={openCloseConfirm}>
            <Icon name="delete" />
          </Button>
        </div>
      </div>

      <Confirm
        open={showConfirm}
        onCancel={openCloseConfirm}
        onConfirm={onDelete}
        content="Estas seguro de quieres eliminar esta direccion?"
      />

      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar Direccion"
      >
        {" "}
        <AddressForm
          onClose={openCloseEdit}
          address={address}
          addressId={addressId}
          onReload={onReload}
        />
      </BasicModal>
    </>
  );
}
