// HTTP Request Anatomy araştırılacak.

// In-Memory DB

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  badge: {
    text: string;
    variant?:
      | "default"
      | "secondary"
      | "destructive"
      | "outline"
      | "success"
      | "warning"
      | "info";
  };
  imageSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ürün 1",
    price: "₺129.99",
    description:
      "Bu ürün harika bir seçim. Yüksek kaliteli malzemelerden üretilmiştir ve uzun ömürlüdür.",
    badge: { text: "Yeni", variant: "success" },
    imageSrc:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
  },
  {
    id: 2,
    name: "Ürün 2",
    price: "₺89.99",
    description:
      "Bu ürün çok popüler. Müşterilerimiz tarafından en çok tercih edilen ürünlerden biridir.",
    badge: { text: "İndirimli", variant: "destructive" },
    imageSrc:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Ürün 3",
    price: "₺149.99",
    description:
      "Bu ürün en çok satanlardan biri. Sınırlı sayıda stokta kalmıştır, acele edin!",
    badge: { text: "Tükeniyor", variant: "warning" },
    imageSrc:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 4,
    name: "Ürün 4",
    price: "₺199.99",
    description:
      "Özel tasarım ürünümüz. Sınırlı sayıda üretilmiştir ve benzersiz özelliklere sahiptir.",
    badge: { text: "Özel Seri", variant: "info" },
    imageSrc:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
  },
  {
    id: 5,
    name: "Ürün 5",
    price: "₺179.99",
    description:
      "Yeni sezon ürünümüz. Modern tasarımı ve kullanışlı özellikleriyle öne çıkıyor.",
    badge: { text: "Yeni Sezon", variant: "secondary" },
    imageSrc:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 6,
    name: "Ürün 6",
    price: "₺249.99",
    description:
      "Premium kalitede ürünümüz. Lüks detaylar ve üstün performans sunar.",
    badge: { text: "Premium", variant: "default" },
    imageSrc:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

export async function GET() {
  // Veritabanından oku?
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}

// 1- RDBMS - NOSQL (PostgreSQL - MongoDB)
// Prisma - Mongoose
