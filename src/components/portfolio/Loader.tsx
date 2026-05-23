import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader-wrap ${hidden ? "hidden" : ""}`} aria-hidden={hidden}>
      <div className="loader" />
    </div>
  );
}
