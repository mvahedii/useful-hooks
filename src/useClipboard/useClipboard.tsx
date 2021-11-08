import { useState, useEffect } from "react";

export const useClipboard = (text: string) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
      },
      (err) => setError(err)
    );
  }, [text]);

  return { isCopied, error };
};
