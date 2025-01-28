'use client';
import { useEffect, useState } from 'react';

import { ProductSingle } from '@/components/single/product-single';
import { elService } from '@/lib/service/el-service';

export function HomePageProductSection() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await elService({});
    setData(res);
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  //   return <ProductSingle />;
  return (
    <div className="container flex max-w-7xl flex-wrap gap-4 py-3">
      {data &&
        data.map((product, idx) => (
          <div className="w-72" key={idx}>
            <ProductSingle {...product} />
          </div>
        ))}
    </div>
  );
}
