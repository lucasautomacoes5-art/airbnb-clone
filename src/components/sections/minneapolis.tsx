"use client";

import React from 'react';
import Image from 'next/image';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const accommodations = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/f5b52feb_original-19.jpg",
    isGuestFavorite: true,
    location: "Quarto em Mineápolis",
    rating: 4.97,
    price: 380,
    nights: 1,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/d4359419-f8f2-4d1d-a655-73ec7d380ce6-20.jpg",
    isGuestFavorite: false,
    location: "Quarto em Mineápolis",
    rating: 4.86,
    price: 446,
    nights: 1,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/e0230980_original-21.jpg",
    isGuestFavorite: true,
    location: "Quarto em São Paulo",
    rating: 4.88,
    price: 554,
    nights: 1,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/d987d6e8-0452-4380-aca4-f777cd954b02-22.jpeg",
    isGuestFavorite: false,
    location: "Suíte de hóspedes em Mineápolis",
    rating: 4.76,
    price: 710,
    nights: 1,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/7d5d039b-0a31-4898-abf5-835e2a68d7f6-23.jpeg",
    isGuestFavorite: true,
    location: "Quarto em Fridley",
    rating: 4.76,
    price: 648,
    nights: 1,
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/62e06a47-6156-4653-bedb-21ab4252e6b3-24.jpg",
    isGuestFavorite: true,
    location: "Hotel em Plymouth",
    rating: 4.86,
    price: 831,
    nights: 1,
  }
];

type Accommodation = typeof accommodations[0];

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button 
      onClick={(e) => { 
        e.preventDefault(); 
        e.stopPropagation();
        setIsFavorite(!isFavorite); 
      }} 
      className="absolute top-3 right-3"
    >
      <Heart
        className={`w-6 h-6 stroke-white transition-all ${isFavorite ? 'fill-primary stroke-primary' : 'fill-black/50'}`}
        strokeWidth={2}
      />
    </button>
  );
};

const AccommodationCard = ({ image, isGuestFavorite, location, rating, price, nights }: Accommodation) => (
  <div className="flex-shrink-0 w-[271px]">
    <a href="#">
      <div className="relative mb-2">
        <Image
          src={image}
          alt={location}
          width={271}
          height={256}
          className="w-full h-full object-cover rounded-xl aspect-[20/19]"
        />
        {isGuestFavorite && (
          <div className="absolute top-3 left-3 bg-white rounded-full px-2 py-1">
            <span className="text-xs font-bold text-[#222222]">Preferido dos hóspedes</span>
          </div>
        )}
        <FavoriteButton />
      </div>
      <div className="text-sm">
        <div className="flex justify-between items-center text-[#222222]">
          <h3 className="font-semibold truncate pr-2">{location}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-[14px] h-[14px] fill-current" />
            <span className="text-sm">{rating.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
        <p className="mt-1 text-[#222222]">
          <span className="font-semibold">R${price}</span>
          <span className="text-[#222222] font-normal"> por {nights === 1 ? '1 noite' : `${nights} noites`}</span>
        </p>
      </div>
    </a>
  </div>
);

const MinneapolisSection = () => {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[22px] font-semibold text-[#222222]">
            <a href="#" className="hover:underline">
              Disponível em Mineápolis neste fim de semana
            </a>
          </h2>
          <div className="hidden lg:flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:shadow-md transition-shadow">
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
            {accommodations.map((item, index) => (
              <AccommodationCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinneapolisSection;