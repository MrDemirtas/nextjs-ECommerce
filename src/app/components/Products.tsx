"use client";

import { useEffect, useState } from "react";

import { Product } from "../api/products/route";
import { ProductCard } from "@/components/ui/product-card";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

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
