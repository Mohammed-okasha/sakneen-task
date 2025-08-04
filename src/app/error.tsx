"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-[600px] bg-white rounded-xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-8 px-5 flex flex-col items-center gap-6">
      <h1 className="text-2xl">Something went wrong!</h1>
      <button
        onClick={() => reset()}
        className="bg-[#2419be] py-2 px-4 rounded text-white cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
