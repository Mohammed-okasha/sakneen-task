import React from "react";
import Table from "@/ui/Table";
import ForSaleBadge from "./ForSaleBadge ";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Unit } from "@/types/units";

const UnitRow = ({ unitItem }: { unitItem: Unit }) => {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);

  const toggleGalleyOpen = () => setIsGalleryOpen((open) => !open);

  return (
    <Table.Row className="even:bg-white odd:bg-[#f5f5f5]">
      <Table.TableCell>{unitItem._id}</Table.TableCell>
      <Table.TableCell>{unitItem.unit_type}</Table.TableCell>
      <Table.TableCell>{unitItem.total_price} EGP</Table.TableCell>
      <Table.TableCell>
        <ForSaleBadge isForSale={unitItem.for_sale} />
      </Table.TableCell>
      <Table.TableCell>
        <Image
          src={unitItem.photos[0].src}
          alt="unit-image"
          width={80}
          height={80}
          className="object-contain cursor-pointer rounded"
          onClick={toggleGalleyOpen}
        />
        <Lightbox
          open={isGalleryOpen}
          slides={unitItem.photos}
          close={toggleGalleyOpen}
        />
      </Table.TableCell>
    </Table.Row>
  );
};

export default UnitRow;
