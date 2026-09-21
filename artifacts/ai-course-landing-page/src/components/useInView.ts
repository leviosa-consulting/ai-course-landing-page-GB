"use client";

import { useEffect, useState } from "react";

/** Whether the element with `id` is on screen. `null` until the first measurement. */
export function useInView(id: string) {
  const [inView, setInView] = useState<boolean | null>(null);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);

  return inView;
}
