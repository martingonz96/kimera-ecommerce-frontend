import styles from "./BannerLastPrinter.module.scss";
import { Printer } from "@/api/printer";
import Discount from "@/components/discount/Discount";
import { calcDiscount } from "@/utils/functions/calcDiscount";
import { set } from "lodash";
import { DateTime } from "luxon";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";

const printerCtrl = new Printer();

export function BannerLastPrinter() {
  const [printer, setPrinter] = useState(null);

  useEffect(() => {
    const lastPrinter = async () => {
      try {
        const res = await printerCtrl.getLastPrinter();
        setPrinter(res.data[0]);
      } catch (error) {
        console.log("Error in lastPrinter:", error); // Modify this line
      }
    };

    lastPrinter();
  }, []);

  if (!printer) return null;

  const wallpaper = printer.attributes.wallpaper;

  const releaseDate = new Date(printer.attributes.releaseDate).toISOString();

  const price = calcDiscount(
    printer.attributes.price,
    printer.attributes.discount
  );

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />

      <Link className={styles.infoPrinter} href={printer.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{printer.attributes.title}</h2>

          <p className={styles.price}>
            <Discount>-{printer.attributes.discount}%</Discount>
            <span className={styles.finalPrice}>{price}</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
