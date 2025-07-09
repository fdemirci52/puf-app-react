export default function TokenName({ name, className = "", children, ...props }) {
  return (
    <span className={className} {...props}>{name}{children}</span>
  );
} 