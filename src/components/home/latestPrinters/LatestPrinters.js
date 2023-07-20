import { Printer } from "@/api/printer";
import GridPrinters from "@/components/gridPrinters/GridPrinters";
import { useState, useEffect } from "react";

const printerCtrl = new Printer();
const limit = 8;
const platformId = null;

export function LatesPrinters({ title, platform, limit }) {
  const [printers, setPrinters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await printerCtrl.getLatestPrublished({
          limit,
          platformId,
        });
        setPrinters(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!printers) return null;

  return (
    <div>
      <h2>{title}</h2>
      <GridPrinters printers={printers} />
    </div>
  );
}
