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

interface UnitsTable {
  units: Unit[];
  isLoading: boolean;
}

const UnitsTable = ({ units, isLoading }: UnitsTable) => {
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
        data={units}
        render={(unit) => <UnitRow key={unit.unit_id} unitItem={unit} />}
      />
    </Table>
  );
};

export default UnitsTable;
