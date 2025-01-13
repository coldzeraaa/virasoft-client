export default function Loading() {
  return (
    <div className="container grid grid-cols-[200px,1fr] gap-4 py-10 lg:grid-cols-[300px,1fr]">
      <div className="skeleton" />
      <div className="grid grid-rows-[auto,1fr] gap-4">
        <div className="skeleton h-16 w-full" />
        <div className="skeleton h-full w-full" />
      </div>
    </div>
  );
}
