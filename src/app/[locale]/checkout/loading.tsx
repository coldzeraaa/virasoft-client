export default function Loading() {
  return (
    <div className="container grid grid-cols-12 gap-4 py-8">
      <div className="skeleton col-span-7 min-h-96 bg-base-300" />
      <div className="skeleton col-span-5 min-h-40 bg-base-300" />
    </div>
  );
}
