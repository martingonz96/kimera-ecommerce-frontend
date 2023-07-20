import { Button, Icon, Image, Input } from "semantic-ui-react";
import styles from "./Menu.module.scss";
import { useEffect, useState } from "react";
import { Brands } from "@/api/brands";
import { map, set } from "lodash";
import Link from "next/link";
import classNames from "classnames";

const brandsCtrl = new Brands();

function Menu(props) {
  const { isopensearch } = props;

  const [brands, setBrands] = useState(null);

  const [showSearch, setShowSearch] = useState(false);

  const openCloseSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await brandsCtrl.getAll();
        setBrands(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  return (
    <div className={styles.brands}>
      {map(brands, (brand) => (
        <Link key={brand.id} href={`/printers/${brand.attributes.slug}`}>
          <Image src={brand.attributes.icon.data.attributes.url} />
          {brand.attributes.title}
        </Link>
      ))}

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <input
          id="search-printers"
          placeholder="Buscar"
          focus={true}
          className={styles.input}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}

export default Menu;
