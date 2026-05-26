import React, { useEffect, useState } from "react";

export default function Counter({ target = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const iv = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(iv);
      }
      setValue(cur);
    }, 18);
    return () => clearInterval(iv);
  }, [target]);

  return <span>{value}</span>;
}
