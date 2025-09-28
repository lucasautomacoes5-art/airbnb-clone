"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Stay {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  isGuestFavorite: boolean;
}

const miamiStays: Stay[] = [
  {
    id: 1,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/978271b3-7b72-4b5c-a0ec-6b870017163b-25.jpeg",
    title: "Quarto em Flagami",
    price: 560,
    rating: 4.94,
    isGuestFavorite: true,
  },
  {
    id: 2,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/8a9ff70a-c521-4f46-be4c-2ce77bd91315-26.jpeg",
    title: "Apartamento em Ocean Front",
    price: 1046,
    rating: 4.75,
    isGuestFavorite: true,
  },
  {
    id: 3,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/3e8457ea-0eac-4e6b-9c75-b237eb0ff617-27.jpg",
    title: "Apartamento em Miami",
    price: 893,
    rating: 4.8,
    isGuestFavorite: true,
  },
  {
    id: 4,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/2dd6a6d7-6a4e-487d-a740-75b14b9f5462-28.jpg",
    title: "Quarto em Coral Way",
    price: 734,
    rating: 4.87,
    isGuestFavorite: true,
  },
  {
    id: 5,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/2a9203fd-7712-496e-9451-796e3e47388b-29.jpg",
    title: "Quarto em Little Havana",
    price: 837,
    rating: 4.95,
    isGuestFavorite: true,
  },
  {
    id: 6,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/849a73d8-fde3-4971-bbad-f3a206c142dd-30.jpeg",
    title: "Quarto em Allapattah",
    price: 428,
    rating: 4.8,
    isGuestFavorite: true,
  },
];

const StayCard = ({ stay }: { stay: Stay }) => (
  <div className="w-[271px]">
    <Link href="#" className="group">
      <div className="relative mb-2.5">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={stay.image}
            alt={stay.title}
            width={271}
            height={256}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {stay.isGuestFavorite && (
          <div className="absolute top-3 left-3 z-10 rounded-full bg-white px-2.5 py-1">
            <p className="text-xs font-semibold text-gray-900">
              Preferido dos hóspedes
            </p>
          </div>
        )}
        <button className="absolute top-3 right-3 z-10 text-white">
          <Heart className="h-6 w-6" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth={1} />
        </button>
      </div>
      <div className="text-base">
        <div className="flex items-start justify-between">
          <h3 className="truncate pr-2 font-semibold text-text-primary">
            {stay.title}
          </h3>
          <div className="flex flex-shrink-0 items-center gap-1 pt-0.5">
            <Star className="h-3.5 w-3.5 fill-current text-text-primary" />
            <span className="text-sm text-text-primary">
              {stay.rating.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
        <p className="text-base text-text-secondary">
          <span className="font-semibold text-text-primary">
            R${" "}
            {new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 0,
            }).format(stay.price)}
          </span>
          <span className="text-text-secondary"> por 2 noites</span>
        </p>
      </div>
    </Link>
  </div>
);

export default function MiamiSection() {
  return (
    <section className="py-6">
      <Carousel
        opts={{
          align: "start",
          loop: false,
          dragFree: true,
        }}
        className="w-full"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-text-primary">
            <Link href="#" className="flex items-center gap-1 hover:underline">
              Acomodações em Miami
              <ChevronRight className="h-4 w-4" />
            </Link>
          </h2>
          <div className="hidden items-center gap-2 md:flex">
            <CarouselPrevious className="static h-8 w-8 -translate-y-0 rounded-full border-border bg-card" />
            <CarouselNext className="static h-8 w-8 -translate-y-0 rounded-full border-border bg-card" />
          </div>
        </div>
        <CarouselContent className="-ml-6">
          {miamiStays.map((stay) => (
            <CarouselItem key={stay.id} className="basis-auto pl-6">
              <StayCard stay={stay} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}