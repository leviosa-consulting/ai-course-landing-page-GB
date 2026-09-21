export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  className,
  unoptimized,
  preload,
  ...props
}: any) {
  // If fill is true, we mimic next/image fill behavior
  const style = fill ? { position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" } : undefined;
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      style={style as any}
      {...props}
    />
  );
}
