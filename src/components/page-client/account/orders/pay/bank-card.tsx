'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function PaymentCard({ bankList, orderNumber }: { bankList: BankListType; orderNumber: string | undefined }) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        modalRef.current?.showModal();
      }}
      className="flex  w-full items-center justify-between  gap-3  rounded-xl border border-solid border-gray-200 px-2 py-2 hover:shadow-lg"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center">
          <Image priority width={800} height={800} src={`${bankList.logo}`} alt="" />
        </div>
        <div className="flex flex-col">
          <div>{bankList?.name ?? <p className=" text-ls font-medium">{bankList?.name}</p>}</div>
          <div>{bankList?.description ?? <p className="text-sm text-gray-400">{bankList?.description}</p>}</div>
        </div>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-fit  max-w-5xl">
          <div className="flex items-center justify-center">
            <Image
              width={400}
              height={200}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              alt="image"
            />
          </div>
          <Link className="btn border border-solid border-gray-300" href={bankList.link}>
            Апп нээх
          </Link>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => {
                  router.push(`/account/orders/${orderNumber}`);
                }}
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </button>
  );
}

export interface BankListType {
  description: string;
  link: string;
  logo: string;
  name: string;
}
