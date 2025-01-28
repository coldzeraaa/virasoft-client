'use client';
import { useEffect, useState } from 'react';

import { ProductSingle } from '@/components/single/product-single';
import { elService } from '@/lib/service/el-service';
import type { HitType } from '@/types/hit-type';

export function HomePageProductSection() {
  const [data, setData] = useState<HitType[]>([]);
  const fetchData = async () => {
    const res = await elService({});
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //   return <ProductSingle />;
  return (
    <div className="container flex max-w-7xl flex-wrap gap-4 py-3">
      {data &&
        data?.map((product, idx) => (
          <div className="w-72" key={idx}>
            <ProductSingle {...product} />
          </div>
        ))}
    </div>
  );
}
