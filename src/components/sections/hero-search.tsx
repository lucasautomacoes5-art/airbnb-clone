"use client";

import { Search } from "lucide-react";

export default function HeroSearch() {
  return (
    <div className="w-full bg-background py-8">
      <div
        className="mx-auto flex h-[66px] w-full max-w-[850px] items-center
                   rounded-full border border-border bg-card
                   shadow-[0_1px_2px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.05)]"
      >
        {/* Location */}
        <label
          htmlFor="location-input"
          className="h-full flex-1 cursor-pointer rounded-l-full hover:bg-secondary"
        >
          <div className="flex h-full flex-col justify-center pl-8 pr-4">
            <span className="text-xs font-semibold text-foreground">Onde</span>
            <input
              id="location-input"
              type="text"
              placeholder="Buscar destinos"
              className="w-full truncate border-none bg-transparent p-0 text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
            />
          </div>
        </label>

        <div className="h-8 w-px bg-border" />

        {/* Check-in */}
        <div className="h-full shrink-0 cursor-pointer hover:bg-secondary">
          <div className="flex h-full flex-col justify-center px-6">
            <p className="text-xs font-semibold text-foreground">Check-in</p>
            <p className="text-sm text-muted-foreground">Insira as datas</p>
          </div>
        </div>

        <div className="h-8 w-px bg-border" />

        {/* Checkout */}
        <div className="h-full shrink-0 cursor-pointer hover:bg-secondary">
          <div className="flex h-full flex-col justify-center px-6">
            <p className="text-xs font-semibold text-foreground">Checkout</p>
            <p className="text-sm text-muted-foreground">Insira as datas</p>
          </div>
        </div>
        
        <div className="h-8 w-px bg-border" />

        {/* Guests & Search Button */}
        <div className="h-full shrink-0 cursor-pointer rounded-r-full hover:bg-secondary">
          <div className="flex h-full items-center pl-6 pr-2">
            <div className="mr-5 text-left">
              <p className="text-xs font-semibold text-foreground">Quem</p>
              <p className="text-sm text-muted-foreground">Hóspedes?</p>
            </div>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}