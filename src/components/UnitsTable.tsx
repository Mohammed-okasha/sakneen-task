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
      {unitsData.length > 0 && (
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
      )}
      {!isLoading && unitsData.length === 0 && (
        <div className="text-xl md:text-2xl shadow-lg rounded-md overflow-auto bg-white p-10 text-center">
          There is no units found
        </div>
      )}
    </div>
  );
};

export default UnitsTable;
