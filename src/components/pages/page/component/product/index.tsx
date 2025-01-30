import { ProductSingle } from '@/components/single/product-single';
import { elService } from '@/lib/service/el-service';

export async function ProductComponent({ list }: ProductComponentProps) {
  const response = await elService({
    slugs: list.split(',').reduce((acc: string[], cur) => {
      const trimmed = cur.trim();
      if (trimmed.length > 0) return [...acc, trimmed.startsWith('/') ? trimmed : `/${trimmed}`];
      return acc;
    }, []),
  });

  if (response.length === 0) return null;

  return (
    <ul className="grid grid-cols-4 gap-4">
      {response.map((p) => (
        <ProductSingle key={p.id} {...p} />
      ))}
    </ul>
  );
}

export interface ProductComponentProps {
  type: string;
  list: string;
}
