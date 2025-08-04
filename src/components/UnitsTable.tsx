import Table from "@/ui/Table";
import UnitRow from "./UnitRow";
import UnitRowSkeleton from "@/ui/skeleton/UnitRowSkeleton";
import { PAGE_SIZE } from "@/utils/constant";
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
  const unitsData = isLoading ? Array.from({ length: PAGE_SIZE }) : units;

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
          data={unitsData as Unit[]}
          render={(unit: Unit, index) => (
            <>
              {unit && <UnitRow key={unit.unit_id} unitItem={unit} />}
              {!unit && <UnitRowSkeleton key={index} />}
            </>
          )}
        />
      </Table>
    </div>
  );
};

export default UnitsTable;
