"use client";

import { ImageSectionProduct } from "@/components/images/image-section-product";
import { BuySection } from "@/components/pages/slug/buy-section";
import { ErrorResult } from "@/components/result/error-result";
import { useProductQuery } from "@/gql/query/product/id.generated";
import { ProductPageProvider } from "@/lib/context/product-context";

export default function ProductSlugPage({ params }: ProductSlugPageProps) {
  const { data, loading, error } = useProductQuery({
    variables: { slug: params.slug[0] },
  });

  if (loading)
    return (
      <div className="container my-6 grid h-full w-full grid-cols-12 gap-14 xl:h-4/6">
        <div className="skeleton col-span-12 h-full md:col-span-8" />
        <div className="skeleton col-span-12 h-full md:col-span-4" />
      </div>
    );
  if (!data || !data.product || error)
    return <ErrorResult message={error?.message || "Product not found"} />;

  return (
    <>
      <ProductPageProvider
        product={data.product}
        selectedVariant={params.slug[1]}
      >
        <div itemType="https://schema.org/Product" itemScope>
          <meta itemProp="productID" content={data.product.id} />
          <meta itemProp="mpn" content={data.product.id} />
          <main className="container py-10">
            <div
              aria-label="base info section"
              className="container mb-6 grid gap-4 md:grid-cols-12 md:gap-8 xl:gap-14"
            >
              <div
                aria-label="images, descriptions sections"
                className="grid gap-6 md:col-span-6 lg:col-span-7 xl:col-span-8"
              >
                <ImageSectionProduct
                  images={data.product.master.images}
                  alt={data.product.name}
                />
                {data.product.description && (
                  <section
                    className="w-full overflow-auto"
                    aria-label="description"
                  >
                    <div
                      className="md:pl-4"
                      dangerouslySetInnerHTML={{
                        __html: data.product.description,
                      }}
                    />
                  </section>
                )}
              </div>
              <div
                aria-label="title, price, and buy sections"
                className="md:col-span-6 lg:col-span-5 xl:col-span-4"
              >
                <div className="sticky top-28 grid gap-6 rounded-lg p-2 lg:p-4">
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
