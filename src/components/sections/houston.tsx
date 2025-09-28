"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

interface Accommodation {
  image: string;
  isGuestFavorite: boolean;
  location: string;
  rating: number;
  price: string;
  duration: string;
}

const accommodations: Accommodation[] = [
  {
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI5MDI2NjM0NDYzOTE0MTAzNA%3D%3D/original/ac9e8e25-fd5d-4f11-912f-f404d53a1c02.jpeg?im_w=720",
    isGuestFavorite: true,
    location: "Quarto em Houston",
    rating: 4.94,
    price: "579",
    duration: "2 noites",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1004113261699932177/original/30f789ad-971c-4629-8735-8667b93c4e40.jpeg?im_w=720",
    isGuestFavorite: false,
    location: "Lugar para ficar em Houston",
    rating: 4.78,
    price: "853",
    duration: "2 noites",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5MzE4MDU5MjY1NDYwNzYxOA%3D%3D/original/0fae136b-d02f-45b9-b883-8a3ac8f75e24.jpeg?im_w=720",
    isGuestFavorite: true,
    location: "Suíte de hóspedes em Houston",
    rating: 4.97,
    price: "996",
    duration: "2 noites",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1234979148384501712/original/ab5e66ea-b769-42b4-8255-a2268686d140.jpeg?im_w=720",
    isGuestFavorite: true,
    location: "Quarto em Houston",
    rating: 4.96,
    price: "399",
    duration: "2 noites",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-829283777595567083/original/c42b7194-c148-43a1-893f-1d8031d16453.jpeg?im_w=720",
    isGuestFavorite: true,
    location: "Quarto em Houston",
    rating: 4.95,
    price: "834",
    duration: "2 noites",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1360341761618392134/original/5e38148b-e666-41e3-b903-8822521f7057.jpeg?im_w=720",
    isGuestFavorite: true,
    location: "Apartamento em Houston",
    rating: 4.76,
    price: "623",
    duration: "2 noites",
  },
  {
    image: "https://a0.muscache.com/im/pictures/7cc3a552-0cb8-4398-b34d-2b2df5fc398c.jpg?im_w=720",
    isGuestFavorite: false,
    location: "Hotel boutique em San Juan",
    rating: 4.77,
    price: "934",
    duration: "2 noites",
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-52337284/original/95a30a4d-499d-45f9-968c-23c594a3b344.jpeg?im_w=720",
    isGuestFavorite: true,
    location: "Condomínio em San Juan",
    rating: 4.87,
    price: "1.307",
    duration: "2 noites",
  },
];

const PropertyCard = ({ item }: { item: Accommodation }) => (
  <div className="w-[277.5px] flex-shrink-0 snap-start">
    <a href="#" className="block group">
      <div className="relative">
        <div className="relative w-full aspect-[20/19] rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.location}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {item.isGuestFavorite && (
          <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 text-xs font-bold text-[#222222]">
            Preferido dos hóspedes
          </div>
        )}
        <button className="absolute top-3 right-3 text-white">
          <Heart className="w-6 h-6 fill-[rgba(0,0,0,0.5)] stroke-white stroke-2" />
        </button>
      </div>
      <div className="mt-2.5">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-black text-[15px] leading-tight truncate pr-2">{item.location}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3 h-3 fill-black text-black" />
            <span className="text-[15px] text-black pt-px">{item.rating.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
        <p className="text-[15px] text-[#222222] mt-1">
          <span className="font-semibold">R${item.price}</span> por {item.duration}
        </p>
      </div>
    </a>
  </div>
);

export default function HoustonSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkArrows = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 1);
            setShowRightArrow(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1);
        }
    },[]);

    useEffect(() => {
        const scrollable = scrollContainerRef.current;
        if (scrollable) {
            checkArrows();
            scrollable.addEventListener('scroll', checkArrows, { passive: true });
            window.addEventListener('resize', checkArrows);
        }

        return () => {
            if (scrollable) {
                scrollable.removeEventListener('scroll', checkArrows);
                window.removeEventListener('resize', checkArrows);
            }
        };
    }, [checkArrows]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-6">
            <div className="container lg:px-20 mx-auto">
                <div className="flex justify-between items-center mb-5 px-6 lg:px-0">
                    <h2 className="text-[22px] font-semibold text-[#222222]">Confira acomodações em Houston</h2>
                    <div className="items-center space-x-2 hidden md:flex">
                        <button
                            onClick={() => scroll('left')}
                            className={`p-2 rounded-full border border-neutral-300 bg-white shadow-sm hover:shadow-md transition-opacity ${!showLeftArrow ? 'opacity-0 cursor-default' : 'opacity-100'}`}
                            aria-label="Scroll left"
                            disabled={!showLeftArrow}
                        >
                            <ChevronLeft className="h-4 w-4 text-black" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className={`p-2 rounded-full border border-neutral-300 bg-white shadow-sm hover:shadow-md transition-opacity ${!showRightArrow ? 'opacity-0 cursor-default' : 'opacity-100'}`}
                            aria-label="Scroll right"
                            disabled={!showRightArrow}
                        >
                           <ChevronRight className="h-4 w-4 text-black" />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div
                      ref={scrollContainerRef}
                      className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:-mx-20 lg:px-20 scroll-pl-6 lg:scroll-pl-20"
                    >
                        {accommodations.map((item, index) => (
                         <PropertyCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}