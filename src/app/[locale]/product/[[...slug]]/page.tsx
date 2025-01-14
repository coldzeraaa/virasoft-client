'use client';

import { ImageSectionProduct } from '@/components/images/image-section-product';
import { BaseInfoSection } from '@/components/pages/slug/base-info-section';
import { BuySection } from '@/components/pages/slug/buy-section';
import { ErrorResult } from '@/components/result/error-result';
import { useProductQuery } from '@/gql/query/product/id.generated';
import { ProductPageProvider } from '@/lib/context/product-context';

export default function ProductSlugPage({ params }: ProductSlugPageProps) {
  const { data, loading, error } = useProductQuery({ variables: { slug: params.slug[0] } });

  if (loading) return <div>Loading...</div>;
  if (!data || !data.product || error) return <ErrorResult message={error?.message || 'Product not found'} />;

  return (
    <>
      <ProductPageProvider product={data.product} selectedVariant={params.slug[1]}>
        <div itemType="https://schema.org/Product" itemScope>
          <meta itemProp="productID" content={data.product.id} />
          <meta itemProp="mpn" content={data.product.id} />
          <main className="container py-10">
            <div aria-label="base info section" className="mb-6 grid gap-14 md:grid-cols-12">
              <div aria-label="images, descriptions sections" className="grid gap-6 md:col-span-8">
                <ImageSectionProduct images={data.product.images} alt={data.product.name} />
                {data.product.description && (
                  <section className="w-full overflow-auto" aria-label="description">
                    <div className="pl-4" dangerouslySetInnerHTML={{ __html: data.product.description }} />
                  </section>
                )}
              </div>
              <div aria-label="title, price, and buy sections" className="md:col-span-4">
                <BaseInfoSection />
                <div className="sticky top-28 grid gap-6 rounded-lg border p-2 lg:p-4">
                  {/*  <VariantsSection />*/}
                  <BuySection />
                </div>
              </div>
            </div>
          </main>
        </div>
      </ProductPageProvider>
    </>
  );
}

export interface ProductSlugPageProps {
  params: {
    slug: string[];
    locale: string;
  };
}
