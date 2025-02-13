import { ProductSingle } from '@/components/single/product-single';
import { elService } from '@/lib/service/el-service';

export async function ProductComponent({ list }: ProductComponentProps) {
  const hits = await elService({
    slugs: list.split(',').reduce((acc: string[], cur) => {
      const trimmed = cur.trim();
      if (trimmed.length > 0) return [...acc, trimmed];
      return acc;
    }, []),
  });
  console.log({ hits });
  console.log({ list });

  return (
    <ul className="grid grid-cols-4 gap-4">
      {hits.map((p) => (
        <ProductSingle key={p.id} {...p} />
      ))}
    </ul>
  );
}

export interface ProductComponentProps {
  type: string;
  list: string;
}
