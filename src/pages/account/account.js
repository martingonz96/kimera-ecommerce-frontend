import Info from "@/components/account/info/Info";
import BasicLayout from "@/layout/BasicLayout/BasicLayout";
import { Tab } from "semantic-ui-react";
import styles from "./account.module.scss";
import useAuth from "@/hooks/useContext";
import { useRouter } from "next/router";
import { Settings } from "@/components/settings";
import { useEffect } from "react";
import Separator from "@/components/shared/Separator";
import { Address } from "@/components/address";
import { useState } from "react";
import { set } from "lodash";

function account() {
  const { user, logout } = useAuth();

  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  };

  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => <Tab.Pane attached={false}>Mis pedidos</Tab.Pane>,
    },
    {
      menuItem: "Lista de deseso",
      render: () => <Tab.Pane attached={false}>Lista de deseso</Tab.Pane>,
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddress reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 20,
        icon: "settings",
        content: "Ajustes",
      },
      render: () => (
        <Tab.Pane attached={false}>
          <div className={styles.containerForms}>
            <Settings.ChangeNameForm />
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}

export default account;
