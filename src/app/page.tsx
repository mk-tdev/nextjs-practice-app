"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [someValue, setSomeValue] = useState(0);

  return (
    <main>
      <div>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share Meal</Link>
        <Link href="/community">Community</Link>

        <p>{someValue}</p>
        <button
          className="p-3 bg-slate-600 text-white"
          onClick={() => setSomeValue((prev) => prev + 1)}
        >
          Button
        </button>
      </div>
    </main>
  );
}
