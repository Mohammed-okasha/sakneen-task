import React, { useRef } from "react";

interface useDebounceParams {
  deleay: number;
  callback: (value: string) => void;
}

export const useDebounce = ({ deleay, callback }: useDebounceParams) => {
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = e.target.value;

    if (enteredValue.trim() === "") {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      callback("");
      return;
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(
      callback.bind(null, enteredValue),
      deleay
    );
  };
};
