import Table from "@/ui/Table";
import ForSaleBadge from "./ForSaleBadge ";
import Image from "next/image";
import { Unit } from "@/types/units";

const UnitRow = ({ unitItem }: { unitItem: Unit }) => {
  return (
    <Table.Row className="even:bg-white odd:bg-[#f5f5f5]">
      <Table.TableCell>{unitItem.unit_id}</Table.TableCell>
      <Table.TableCell>{unitItem.unit_type}</Table.TableCell>
      <Table.TableCell>{unitItem.total_price}</Table.TableCell>
      <Table.TableCell>
        <ForSaleBadge isForSale={unitItem.for_sale} />
      </Table.TableCell>
      <Table.TableCell>
        <Image
          src={unitItem.photos[0]}
          alt="unit-image"
          width={60}
          height={60}
          className="object-contain cursor-pointer"
        />
      </Table.TableCell>
    </Table.Row>
  );
};

export default UnitRow;
