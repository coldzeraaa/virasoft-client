'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function PaymentCard({ bankList, qrCode }: { bankList: BankListType; orderNumber: string | undefined; qrCode: string }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <button type="button" onClick={() => modalRef.current?.showModal()} className="min-w-20 flex-1">
      <div className="">
        <Image
          className="mx-auto mb-2 aspect-square w-20 rounded-lg object-contain"
          priority
          width={800}
          height={800}
          src={`${bankList.logo}`}
          alt=""
        />
        <p className="text-sm font-medium">{bankList?.name}</p>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-fit  max-w-5xl">
          <div className="flex items-center justify-center">
            <Image
              width={400}
              height={200}
              // src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              src={qrCode}
              className="bg-white p-2"
              alt="image"
            />
          </div>
          <Link className="btn border border-solid border-gray-300" href={bankList.link}>
            Апп нээх
          </Link>
          <div className="modal-action">
            <button type="button" onClick={router.back}>
              Close
            </button>
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
