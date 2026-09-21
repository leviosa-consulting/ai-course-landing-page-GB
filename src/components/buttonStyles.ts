/** Shared styles so the WhatsApp and email buttons stay identical. */

export const buttonVariants = {
  primary:
    "bg-gb-green-deep text-white shadow-lg shadow-gb-green-deep/25 hover:bg-gb-green-deeper focus-visible:outline-gb-plum",
  outline:
    "bg-white text-gb-green-deep ring-2 ring-inset ring-gb-green-deep hover:bg-gb-green-deep hover:text-white focus-visible:outline-gb-plum",
  plum: "bg-gb-plum text-white ring-2 ring-inset ring-gb-plum hover:bg-transparent hover:text-gb-plum focus-visible:outline-gb-plum",
  yellow: "bg-gb-yellow text-gb-plum hover:bg-white focus-visible:outline-gb-yellow",
  text: "text-white underline-offset-4 hover:underline focus-visible:outline-gb-yellow",
  link: "text-gb-plum underline decoration-gb-plum/30 underline-offset-4 hover:decoration-gb-plum focus-visible:outline-gb-plum",
};

export const buttonSizes = {
  sm: "gap-2 px-4 py-2.5 text-sm",
  md: "gap-2.5 px-6 py-3 text-base",
  lg: "gap-3 px-6 py-3.5 text-base min-[400px]:text-lg sm:px-7 sm:py-4",
  icon: "size-16",
  bare: "gap-2",
};

export const buttonBase =
  "inline-flex items-center justify-center rounded-full font-bold transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2";

export function buttonClass(variant: keyof typeof buttonVariants, size: keyof typeof buttonSizes, className = "") {
  return `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;
}

/** Icon size that matches each button size. */
export function iconClass(size: keyof typeof buttonSizes) {
  return size === "icon" ? "size-8" : size === "lg" ? "size-6" : "size-5";
}
