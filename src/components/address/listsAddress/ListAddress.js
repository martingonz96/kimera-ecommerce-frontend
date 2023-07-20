import { useState, useEffect } from "react";
import styles from "./ListAddress.module.scss";
import { Address } from "@/api/address";
import useAuth from "@/hooks/useContext";
import { map } from "lodash";
import { AddressComponent } from "./address";

const addressCtrl = new Address();

export function ListAddress({ reload, onReload }) {
  const { user } = useAuth();

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await addressCtrl.getAll(user.id);
        console.log(res);
        setAddresses(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAll();
  }, [reload]);

  if (!addresses) return null;

  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <AddressComponent
          key={address.id}
          addressId={address.id}
          address={address.attributes}
          onReload={onReload}
        ></AddressComponent>
      ))}
    </div>
  );
}
