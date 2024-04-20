"use client";

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

function AppHeader() {
  const path = usePathname();

  return (
    <header className="flex flex-row shadow-lg bg-slate-900 text-white p-4 gap-3 items-center">
      <div>
        <Link href={"/"}>
          <Image src={logoImg} alt="about food" height={50} priority />
        </Link>
      </div>

      <div className="flex flex-row gap-3">
        <div>
          <Link
            href={"/meals"}
            className={
              path.startsWith("/meals")
                ? "bg-slate-50 text-gray-600  p-2"
                : "p-2"
            }
          >
            Browse Meals
          </Link>
        </div>
        <div>
          <Link
            href={"/community"}
            className={
              path.startsWith("/community")
                ? "bg-slate-50 text-gray-600 p-2"
                : "p-2"
            }
          >
            Food Community
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
