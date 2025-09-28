"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, Home, Sparkles, ConciergeBell } from "lucide-react";

const NavLink = ({
  href,
  icon: Icon,
  label,
  isActive = false,
  isNew = false,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isNew?: boolean;
}) => (
  <Link
    href={href}
    className="relative flex h-full items-center justify-center"
  >
    <div
      className={`relative flex items-center gap-x-2 rounded-full px-4 py-2 transition-colors ${
        isActive
          ? "font-semibold text-text-primary"
          : "text-text-secondary hover:bg-secondary hover:text-text-primary"
      }`}
    >
      <Icon
        className="h-5 w-5"
        fill={isActive ? "currentColor" : "none"}
        strokeWidth={isActive ? 2 : 1.5}
      />
      <span className="text-sm">{label}</span>
      {isNew && (
        <div className="absolute -right-1 -top-1.5">
          <span className="flex h-5 items-center justify-center rounded-full bg-gradient-to-r from-[#E61E4D] to-[#D70466] px-2 text-[10px] font-bold uppercase tracking-wider text-white">
            Novo
          </span>
        </div>
      )}
    </div>
  </Link>
);

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden h-[65px] w-full border-t border-border bg-background md:block">
      <div className="mx-auto flex h-full max-w-[1760px] items-center justify-between px-20">
        <div className="flex flex-1 justify-start">
          <Link href="/" className="text-2xl font-bold text-primary">
            airbnb
          </Link>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex h-12 items-center justify-center gap-x-1 rounded-full bg-background p-[2px] shadow-[0_3px_12px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.08)]">
            <NavLink href="#" icon={Home} label="Acomodações" isActive />
            <NavLink href="#" icon={Sparkles} label="Experiências" isNew />
            <NavLink href="#" icon={ConciergeBell} label="Serviços" isNew />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-2">
          <Link
            href="#"
            className="rounded-full px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-secondary"
          >
            Torne-se um anfitrião
          </Link>
          <button
            type="button"
            className="rounded-full p-3 transition-colors hover:bg-secondary"
            aria-label="Escolha um idioma"
          >
            <Globe className="h-5 w-5 text-text-primary" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="relative flex items-center gap-x-3 rounded-full border border-border p-1 pl-3 transition-shadow hover:shadow-md"
            aria-label="Menu de navegação principal"
          >
            <Menu className="h-4 w-4 text-text-primary" />
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/icons/0d189acb-3f82-4b2c-b95f-ad1d6a803d13-5.png"
                alt="Foto do perfil do usuário"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full border border-white bg-primary"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}