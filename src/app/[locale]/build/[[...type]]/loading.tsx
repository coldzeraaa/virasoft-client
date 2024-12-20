export default function Loading() {
  return (
    <div className="container grid grid-cols-[1fr,300px] gap-4">
      <div className="skeleton min-h-40" />
      <div className="skeleton min-h-40" />
    </div>
  );
}
