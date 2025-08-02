interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <div className="flex  flex-col gap-3">
      <h1 className="text-3xl font-medium">{title}</h1>
      {children}
    </div>
  );
};

export default PageHeader;
