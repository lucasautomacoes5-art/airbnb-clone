"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: number;
  imageUrl: string;
  isGuestFavorite: boolean;
  title: string;
  rating: string;
  price: number;
  priceType: string;
}

const propertiesData: Property[] = [
  {
    id: 1,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/b0653d53-7ed5-41cf-8ec0-bc109c2e60b3-7.jpeg",
    isGuestFavorite: false,
    title: "Quarto em Wisconsin Dells",
    rating: "5,0",
    price: 442,
    priceType: "1 noite",
  },
  {
    id: 2,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/644c5ec4-f0fc-4702-b909-13c289fb0be2-8.jpg",
    isGuestFavorite: true,
    title: "Condomínio em Wisconsin Dells",
    rating: "4,94",
    price: 1546,
    priceType: "2 noites",
  },
  {
    id: 3,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/1248a5c8-4616-4d85-a86e-02c2ce4c65df-9.jpeg",
    isGuestFavorite: false,
    title: "Apartamento em Wisconsin Dells",
    rating: "4,8",
    price: 878,
    priceType: "noite",
  },
  {
    id: 4,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/2295480c-7d02-43be-b9aa-5d7144c8137f-10.jpeg",
    isGuestFavorite: true,
    title: "Condomínio em Wisconsin Dells",
    rating: "4,89",
    price: 1520,
    priceType: "noite",
  },
  {
    id: 5,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/711c81a8-7f32-491c-aaca-d155aa9147d3-11.jpeg",
    isGuestFavorite: true,
    title: "Hotel em Oxford",
    rating: "4,83",
    price: 476,
    priceType: "1 noite",
  },
  {
    id: 6,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/59e620f6-db91-456c-8d97-572874330dca-12.jpeg",
    isGuestFavorite: false,
    title: "Casa em Wisconsin Dells",
    rating: "4,78",
    price: 2681,
    priceType: "noite",
  },
];

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="w-[295.33px] flex-shrink-0 cursor-pointer group">
    <div className="relative">
      <div className="relative aspect-[20/19] w-full overflow-hidden rounded-xl">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      {property.isGuestFavorite && (
        <div className="absolute top-3 left-3 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-foreground shadow-md">
          Preferido dos hóspedes
        </div>
      )}
      <button className="absolute top-3 right-3 text-white">
        <Heart className="h-7 w-7" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth={2} />
      </button>
    </div>
    <div className="mt-2 text-base">
      <div className="flex justify-between">
        <h3 className="font-semibold text-foreground truncate">{property.title}</h3>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-current text-foreground" />
          <span className="text-foreground">{property.rating}</span>
        </div>
      </div>
      <p className="mt-0.5">
        <span className="font-semibold text-foreground">
          R$&nbsp;{property.price.toLocaleString('pt-BR')}
        </span>
        <span className="text-muted-foreground"> por {property.priceType}</span>
      </p>
    </div>
  </div>
);

export default function WisconsinDellsSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const handleScroll = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [handleScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; 
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          <a href="#" className="hover:underline">
            Disponível em Wisconsin Dells neste fim de semana ›
          </a>
        </h2>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className={`p-2 rounded-full border bg-white hover:shadow-md transition-all ${
              showLeftArrow ? "opacity-100" : "opacity-0 cursor-default"
            }`}
             disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded-full border bg-white hover:shadow-md transition-all ${
              showRightArrow ? "opacity-100" : "opacity-0 cursor-default"
            }`}
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
      >
        {propertiesData.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}