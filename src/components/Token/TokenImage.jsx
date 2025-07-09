export default function TokenImage({ src, alt, className = "", children, ...props }) {
  return (
    <img src={src} alt={alt} className={className} {...props} />
  );
} 