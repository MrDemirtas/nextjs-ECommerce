import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export interface ProductCardProps {
  title: string;
  description: string;
  price?: string;
  badge?: {
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
  imageSrc?: string;
}

export function ProductCard({
  title,
  description,
  price = "₺99.99",
  badge,
  imageSrc = "https://mylifebox.com/img/blog/blog18/3.png",
}: ProductCardProps) {
  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        {badge && (
          <div className="absolute top-2 right-2 z-10">
            <Badge variant={badge.variant || "default"}>{badge.text}</Badge>
          </div>
        )}
        <img
          src={imageSrc}
          alt={`${title} image`}
          className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <p className="font-bold text-lg">{price}</p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
          Sepete Ekle
        </button>
      </CardFooter>
    </Card>
  );
}
