const UnitRowSkeleton = () => {
  return (
    <tr className="animate-pulse border-b border-gray-200">
      <td className="py-4 px-6">
        <div className="h-4 w-4 bg-gray-300 rounded"></div>
      </td>
      <td className="py-4 px-6">
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </td>
      <td className="py-4 px-6">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </td>
      <td className="py-4 px-6">
        <div className="h-6 w-20 bg-red-200 rounded-full"></div>
      </td>
      <td className="py-4 px-6">
        <div className="h-12 w-16 bg-gray-300 rounded-md"></div>
      </td>
    </tr>
  );
};

export default UnitRowSkeleton;
