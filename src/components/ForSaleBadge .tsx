const ForSaleBadge = ({ isForSale }: { isForSale: boolean }) => {
  const baseStyle =
    "px-2.5 py-1.5 text-xs font-semibold rounded-full inline-block";
  const colorStyle = isForSale
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700";

  return (
    <span className={`${baseStyle} ${colorStyle}`}>
      {isForSale ? "For Sale" : "Not for Sale"}
    </span>
  );
};

export default ForSaleBadge;
