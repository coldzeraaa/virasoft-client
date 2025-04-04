"use client";

import Link from "next/link";

import { ErrorResult } from "@/components/result/error-result";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  const title = getErrorTitle(error);

  return (
    <div className="grid h-full w-full place-items-center">
      <ErrorResult
        message={title.title}
        description={title.description}
        extra={[
          <Link href="/" key="1" className="btn">
            Go home
          </Link>,
          ...(reset
            ? [
                <button
                  key="2"
                  type="button"
                  className="btn btn-primary"
                  onClick={reset}
                >
                  Try again
                </button>,
              ]
            : []),
        ]}
      />
    </div>
  );
}

function getErrorTitle(error: Error): { title: string; description: string } {
  const status = error.message.replace(/.*(\d{3}).*/, "$1");
  switch (status) {
    case "401":
      return {
        title: `Server is down!`,
        description: error.message,
      };
    case "404":
      return {
        title: `Not found!`,
        description: error.message,
      };
    case "501":
      return {
        title: `Server is down!`,
        description: error.message,
      };
    case "502":
      return {
        title: `Server is down!`,
        description: error.message,
      };
    default:
      return {
        title: error.message || `Unknown error`,
        description: `Something went wrong!`,
      };
  }
}
