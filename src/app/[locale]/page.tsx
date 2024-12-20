import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-96">
      <div className="flex gap-4">
        <Link href="/auth/login" className="btn btn-primary">
          Login
        </Link>
        <Link href="/build" className="btn btn-primary">
          build
        </Link>
      </div>
    </div>
  );
}
