"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Data for the properties in Orlando. Using visually similar images from other sections as specific assets were not provided.
const orlandoProperties = [
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-53385012/original/a0962657-0348-43d5-a86a-72d987d3ce14.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Quarto em Kissimmee",
    rating: "4,95",
    price: 529,
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-791775836853245009/original/a24a66a7-45ea-40a2-850f-cc1e9e7323b7.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Quarto em Orlando",
    rating: "5,0",
    price: 647,
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-53844646/original/5b2447b9-4704-45b6-b51f-2a3b054236a2.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Quarto em Kissimmee",
    rating: "4,97",
    price: 623,
  },
  {
    image: "https://a0.muscache.com/im/pictures/monet/Select-936639/original/4164b0f3-5294-4b53-b549-c1822e118029?im_w=720",
    isGuestFavorite: true,
    type: "Quarto em Orlando",
    rating: "4,98",
    price: 604,
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-52823194/original/7c4e517a-5906-4076-9d56-078c66d8e63a.jpeg?im_w=720",
    isGuestFavorite: false,
    type: "Quarto em Orlando",
    rating: "5,0",
    price: 374,
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-646253133379038237/original/03837a28-f60b-4652-9f33-66f83b169602.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Lugar para ficar em Orlando",
    rating: "4,94",
    price: 642,
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-764054636835865199/original/1c45448b-b238-4173-b79c-071f4fa8bbd8.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartamento em Orlando",
    rating: "4.84",
    price: 927,
  },
  {
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1045848591273828960/original/482b76c5-de48-4207-90cc-1cdc76e9c30b.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartamento em Kissimmee",
    rating: "4.75",
    price: 647,
  },
];

type Property = (typeof orlandoProperties)[0];

const PropertyCard = ({ property }: { property: Property }) => (
  <Link href="#" className="block w-full group">
    <div className="relative">
      <div className="relative aspect-[20/19] w-full overflow-hidden rounded-xl">
        <Image
          src={property.image}
          alt={property.type}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {property.isGuestFavorite && (
          <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 shadow">
            <span className="text-xs font-semibold text-gray-900">Preferido dos hóspedes</span>
          </div>
        )}
        <button className="absolute top-3 right-3 text-white z-10">
          <Heart className="h-6 w-6" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-2 text-sm">
        <div className="flex justify-between items-start">
          <p className="font-semibold text-text-primary truncate pr-2">{property.type}</p>
          <div className="flex items-center shrink-0">
            <Star className="w-3.5 h-3.5 fill-current text-text-primary mr-1" />
            <span className="text-text-primary">{property.rating.replace('.', ',')}</span>
          </div>
        </div>
        <p className="text-text-secondary mt-0.5">
          <span className="font-semibold text-text-primary">R${property.price}</span> por 2 noites
        </p>
      </div>
    </div>
  </Link>
);

const OrlandoSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.9;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollability, { passive: true });
      checkScrollability();
      
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(el);

      return () => {
        el.removeEventListener("scroll", checkScrollability);
        resizeObserver.unobserve(el);
      };
    }
  }, [checkScrollability]);

  return (
    <section className="py-6">
      <div className="container">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[22px] leading-[26px] font-semibold text-text-primary">
            <Link href="#" className="hover:underline">
              Disponível no próximo mês em Orlando
            </Link>
          </h2>
          <div className="hidden md:flex items-center space-x-2">
             <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center disabled:opacity-50 transition-opacity"
              aria-label="Previous properties"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center disabled:opacity-50 transition-opacity"
              aria-label="Next properties"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth gap-x-6 pb-2 scrollbar-hide"
          >
            {orlandoProperties.map((property, index) => (
              <div key={index} className="w-[271px] flex-shrink-0">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrlandoSection;