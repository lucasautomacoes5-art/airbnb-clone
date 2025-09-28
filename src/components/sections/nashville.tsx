"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: number;
  imageUrl: string;
  isGuestFavorite: boolean;
  location: string;
  type: string;
  rating: number;
  price: number;
  duration: string;
}

const nashvilleData: Property[] = [
  {
    id: 1,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/d84085d1-f5f4-4e59-811c-d48acbd75219-15.jpeg",
    isGuestFavorite: true,
    location: "Nashville",
    type: "Quarto em",
    rating: 4.96,
    price: 965,
    duration: "por 2 noites",
  },
  {
    id: 2,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/f5703837-19b6-4ecc-ab07-84b733f20785-13.jpeg",
    isGuestFavorite: true,
    location: "Leste de Nashville",
    type: "Quarto em",
    rating: 4.96,
    price: 1145,
    duration: "por 2 noites",
  },
  {
    id: 3,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/9680eeb9-1861-4be8-95ff-ed584db255fe-17.jpg",
    isGuestFavorite: false,
    location: "Inglewood",
    type: "Quarto em",
    rating: 4.92,
    price: 846,
    duration: "por 2 noites",
  },
  {
    id: 4,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/5ee0d87a-e8f9-4166-9b4e-3a9e2091aa21-14.jpeg",
    isGuestFavorite: true,
    location: "Nashville",
    type: "Quarto em",
    rating: 4.97,
    price: 934,
    duration: "por 2 noites",
  },
  {
    id: 5,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/9204f23e-100b-4453-acbb-519f4c0a4980-16.jpeg",
    isGuestFavorite: false,
    location: "Leste de Nashville",
    type: "Quarto em",
    rating: 4.92,
    price: 1232,
    duration: "por 2 noites",
  },
  {
    id: 6,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/4cdf968e-2746-42dc-aa3a-f7f551939726-18.jpeg",
    isGuestFavorite: false,
    location: "Downtown Nashville",
    type: "Apartamento em",
    rating: 4.83,
    price: 1840,
    duration: "por 2 noites",
  },
];

const PropertyCard = (property: Property) => (
  <Link href="#" className="flex-none w-[270px]">
    <div className="relative">
      <div className="relative aspect-[20/19] w-full overflow-hidden rounded-xl">
        <Image src={property.imageUrl} alt={`${property.type} ${property.location}`} fill className="object-cover" />
        {property.isGuestFavorite && (
          <div className="absolute top-3 left-3 bg-white rounded-full px-2 py-1 text-xs font-bold text-[#222222]">
            Preferido dos hóspedes
          </div>
        )}
        <button className="absolute top-3 right-3 p-1 rounded-full bg-transparent">
          <Heart size={24} className="stroke-white fill-black/50" strokeWidth={2} />
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/70'}`} />
          ))}
        </div>
      </div>
      <div className="mt-2 text-sm">
        <div className="flex justify-between items-start">
          <p className="font-semibold text-text-primary truncate">{property.type} {property.location}</p>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star size={14} className="fill-text-primary text-text-primary" />
            <span className="text-text-primary font-normal">
              {property.rating.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
        <p className="text-text-secondary">{property.duration}</p>
        <p className="mt-1">
          <span className="font-semibold text-text-primary">
            R$ {property.price.toLocaleString('pt-BR')}
          </span>
          <span className="text-text-primary"> por noite</span>
        </p>
      </div>
    </div>
  </Link>
);

const NashvilleSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        el.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6">
      <div className="flex justify-between items-center mb-4">
        <a href="#" className="flex items-center text-text-primary hover:underline">
          <h2 className="text-[22px] leading-[26px] font-semibold">Fique em Nashville</h2>
          <ChevronRight className="ml-1 h-5 w-5" />
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md transition-shadow"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 text-text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md transition-shadow"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 text-text-primary" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {nashvilleData.map((property) => (
          <div key={property.id} className="snap-start">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NashvilleSection;