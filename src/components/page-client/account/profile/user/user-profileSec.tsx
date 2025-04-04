import Image from "next/image";

import { MeQuery } from "@/gql/query/user/me.generated";

export function UserProfileSec({ me }: MeType) {
  return (
    <div className="flex w-fit flex-col gap-4 rounded-md px-4 py-4 shadow-md">
      <div className="flex w-full flex-col justify-center  gap-2">
        <div className="avatar flex items-center justify-center ">
          <div className="w-24 rounded-full">
            <Image
              width={400}
              height={400}
              src="https://placehold.co/400"
              alt="User profile"
            />
          </div>
        </div>
        <p className="text-center text-neutral">
          {me?.email || "Email not provided"}
        </p>
      </div>
    </div>
  );
}

interface MeType {
  me: MeQuery["me"];
}
