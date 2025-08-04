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
  ref: React.RefObject<HTMLDivElement | null>;
}

const UnitsTable = ({ units, isLoading, ref }: UnitsTable) => {
  const unitsData = isLoading ? Array.from({ length: 4 }) : units;

  return (
    <div ref={ref}>
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
    </div>
  );
};

export default UnitsTable;
