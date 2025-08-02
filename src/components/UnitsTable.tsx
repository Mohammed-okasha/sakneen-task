import Table from "@/ui/Table";
import UnitRow from "./UnitRow";
import { Unit } from "@/types/units";

export const unitTableHeaders = [
  "Unit ID",
  "Unit Type",
  "Price",
  "For Sale",
  "Gallery",
];

const unitsData: Unit[] = [
  {
    _id: "1",
    unit_id: "A-01",
    unit_type: "penthouse",
    total_price: 1068127,
    for_sale: false,
    photos: [
      "https://placehold.co/300x200",
      "https://placehold.co/300x200",
      "https://placehold.co/300x200",
    ],
  },
  {
    _id: "2",
    unit_id: "A-02",
    unit_type: "apartment",
    total_price: 737820,
    for_sale: true,
    photos: [
      "https://placehold.co/300x200",
      "https://placehold.co/300x200",
      "https://placehold.co/300x200",
    ],
  },
  {
    _id: "3",
    unit_id: "A-03",
    unit_type: "duplex",
    total_price: 1287314,
    for_sale: false,
    photos: [
      "https://placehold.co/300x200",
      "https://placehold.co/300x200",
      "https://placehold.co/300x200",
    ],
  },
];

const UnitsTable = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {unitTableHeaders.map((header) => (
            <Table.TableHead key={header} title={header} />
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body
        data={unitsData}
        render={(unit) => <UnitRow key={unit.unit_id} unitItem={unit} />}
      />
    </Table>
  );
};

export default UnitsTable;
