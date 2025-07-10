// ScaledWrapper.jsx
import { useEffect, useState } from "react";

const ScaledWrapper = ({ children }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => setScale(window.innerWidth / 390);
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        width: "390px",                // orijinal tasarım genişliği
        transform: `scale(${scale})`,  // viewport’a göre ölçekle
        transformOrigin: "top left",   // sol üst köşeden ölçek başlasın
      }}
    >
      {children}
    </div>
  );
};

export default ScaledWrapper;
