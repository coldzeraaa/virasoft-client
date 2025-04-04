"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { catchHelper } from "simple-helper-fns";

import { useBuild } from "@/lib/context/build-context";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";
import { elService } from "@/lib/service/el-service";
import { HitType } from "@/types/hit-type";

export function ProductDetail() {
  const [products, setProducts] = useState<HitType[]>([]);
  const { selectedProducts, selectProduct } = useBuild();
  const searchParams = useSearchParams();

  const productIds = {
    coat: searchParams.get("coat"),
    button: searchParams.get("button"),
    lining: searchParams.get("lining"),
    cuff: searchParams.get("cuff"),
    shirt: searchParams.get("shirt"),
    collar: searchParams.get("collar"),
  };

  useEffect(() => {
    Object.entries(productIds).forEach(([type, id]) => {
      if (id) selectProduct(type, id);
    });
  }, []);

  useEffect(() => {
    const selectedIds = Object.values(selectedProducts);
    if (selectedIds.length > 0) {
      elService({ ids: selectedIds }).then(setProducts).catch(catchHelper);
    }
  }, [selectedProducts]);

  return (
    <div className="relative h-full w-full">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {products.map(
          (product, index) =>
            product.images[0] && (
              <div
                key={product.id}
                className="absolute h-full w-full lg:h-4/6"
                style={{ zIndex: 1 + index }}
              >
                <Image
                  src={imageUrlHelper(product.images[0])}
                  alt={product.name}
                  height={500}
                  width={400}
                  className="h-full w-full object-contain"
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
}
