import Container from "@/ui/Container";
import PageHeader from "@/ui/PageHeader";
import Breadcrumb from "@/ui/Breadcrumb";
import UnitsController from "@/components/UnitsController ";

export default function Home() {
  return (
    <div className="py-10">
      <Container className="flex flex-col gap-8">
        <PageHeader title="Dashboard">
          <Breadcrumb />
        </PageHeader>
        <UnitsController />
      </Container>
    </div>
  );
}
