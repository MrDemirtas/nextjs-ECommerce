import Link from "next/link";
import { Product } from "./api/products/route";
import { ProductCard } from "@/components/ui/product-card";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("Ürünler yüklenirken bir hata oluştu");
  }

  return response.json();
}

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            badge={product.badge}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
