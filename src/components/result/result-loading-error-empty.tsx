import type { ApolloError } from "@apollo/client";
import { PackageOpenIcon, ShieldXIcon } from "lucide-react";

export function ResultLoadingErrorEmpty({
  loading,
  error,
  dataUndefined,
  emptyMessage,
  empty,
}: ResultLoadingErrorEmptyProps) {
  if (loading) return <div className="skeleton min-h-40" />;
  if (error) return <ResultError message={error.message} />;
  if (dataUndefined) return <ResultError message="Data is undefined" />;
  if (empty) return <ResultEmpty message={emptyMessage || "Хоосон байна"} />;
  return <ResultError message="Error is not found" />;
}

export function ResultError({ message }: { message: string }) {
  return (
    <div className="grid min-h-60 place-items-center">
      <div>
        <ShieldXIcon className="mx-auto mb-2 h-12 w-12 text-error" />
        <p className="text-center text-lg">{message}</p>
      </div>
    </div>
  );
}

export function ResultEmpty({ message }: { message: string }) {
  return (
    <div className="grid min-h-60 place-items-center">
      <div>
        <PackageOpenIcon className="mx-auto mb-2 h-12 w-12 text-info" />
        <p className="text-center text-lg">{message}</p>
      </div>
    </div>
  );
}

export interface ResultLoadingErrorEmptyProps {
  loading?: boolean;
  error?: ApolloError;
  dataUndefined?: boolean;
  empty?: boolean;
  emptyMessage?: string;
}
