import Link from "next/link";
import styles from "./GridPrinters.module.scss";
import { calcDiscount } from "@/utils/functions/calcDiscount";
import Discount from "../discount/Discount";
import { map } from "lodash";

function GridPrinters({ printers }) {
  console.log(printers);
  return (
    <div className={styles.gridPrinters}>
      {map(printers, (printer) => (
        <Link
          className={styles.printer}
          key={printer.id}
          href={`/${printer.attributes.slug}`}
        >
          <div>
            <img src={printer.attributes.cover.data.attributes.url} />
            {printer.attributes.discount > 0 && (
              <Discount
                className={styles.discount}
              >{`-${printer.attributes.discount}%`}</Discount>
            )}
          </div>
          <div>
            <span>{printer.attributes.title}</span>
            <span className={styles.finalPrice}>
              {calcDiscount(
                printer.attributes.price,
                printer.attributes.discount
              )}
              €
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GridPrinters;
