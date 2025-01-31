'use client';
import { useProductPage } from '@/lib/context/product-context';

export function BaseInfoSection() {
  const { product, variant } = useProductPage();
  return (
    <section
      aria-label="information of title"
      className="mb-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <p className="mb-1 text-xs font-medium text-gray-500">{product.title}</p>

      <p>
        <strong>Барааны нэр:</strong> {product.name}
      </p>
      <meta itemProp="name" content={product.title || ''} />
      <meta itemProp="description" content={product.description || ''} />
      <meta itemProp="sku" content={variant?.sku || product.master.sku || ''} />
    </section>
  );
}
