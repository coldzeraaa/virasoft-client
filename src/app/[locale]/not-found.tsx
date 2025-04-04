import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </main>
  );
}
