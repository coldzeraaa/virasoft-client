import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid h-96 place-items-center">
      <Link href="/auth/login" className="btn btn-primary">
        Login
      </Link>
    </div>
  );
}
