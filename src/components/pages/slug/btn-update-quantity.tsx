import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

export function BtnUpdateQuantity({
  quantity = 1,
  max,
  min,
  setQuantity,
}: {
  quantity: number;
  setQuantity(val: number): void;
  max?: number;
  min?: number;
}) {
  return (
    <div aria-label="adjustment quantity" className="join">
      <button
        disabled={quantity <= 1 || (min ? min >= quantity : false)}
        onClick={() => setQuantity(quantity - 1)}
        className="btn btn-outline join-item btn-sm"
        type="button"
      >
        <MinusIcon className="w-4" />
      </button>
      <input
        type="number"
        className="input input-sm join-item input-bordered w-20 border-base-content text-center"
        value={quantity}
        onChange={(event) => {
          const value = parseInt(event.target.value, 10);
          setQuantity(value);
        }}
      />
      <button
        disabled={max ? max <= quantity : false}
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className="btn btn-outline join-item btn-sm"
        type="button"
      >
        <PlusIcon className="w-4" />
      </button>
    </div>
  );
}
