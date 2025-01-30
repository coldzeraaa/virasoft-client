export default function Loading() {
  return (
    <div className="container space-y-4 py-4">
      <div className="skeleton aspect-video w-full bg-base-300" />
      <div className="skeleton mx-auto block h-20 w-full max-w-md bg-base-300" />
      <div className="skeleton mx-auto block h-20 w-full max-w-xl bg-base-300" />
      <div className="skeleton mx-auto block h-20 w-full max-w-sm bg-base-300" />
      <div className="skeleton aspect-video w-full bg-base-300" />
      <div className="skeleton mx-auto block h-20 w-full max-w-md bg-base-300" />
      <div className="skeleton mx-auto block h-20 w-full max-w-xl bg-base-300" />
      <div className="skeleton mx-auto block h-20 w-full max-w-sm bg-base-300" />
    </div>
  );
}
