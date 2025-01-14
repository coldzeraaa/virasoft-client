'use client';

import { useProductPage } from '@/lib/context/product-context';

export function BaseInfoSection() {
  const { product, variant } = useProductPage();

  return (
    <section aria-label="information of title" className="mb-6">
      <p className="t-text-xs mb-1">{product.title}</p>
      <h1 className="t-text-sm mb-3">{product.name}</h1>
      <p className="t-text-xs">#{variant?.sku || product.master.sku}</p>

      <meta itemProp="name" content={product.title || ''} />
      <meta itemProp="description" content={product.description || ''} />
      <meta itemProp="sku" content={variant?.sku || product.master.sku || ''} />
    </section>
  );
}
