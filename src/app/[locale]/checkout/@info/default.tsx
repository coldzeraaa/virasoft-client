import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Default() {
  return (
    <>
      <p className="mb-2 flex justify-between font-semibold">
        <span>Алдаа гарсан тул буцна уу</span>
      </p>
      <Link href="/checkout" className="btn btn-primary btn-block mt-2">
        Буцах
        <ChevronLeftIcon />
      </Link>
    </>
  );
}
