import React, { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  const listener = ({ target }) => {
    if (!ref) return;

    if (!ref.contains(target)) {
      handler();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
