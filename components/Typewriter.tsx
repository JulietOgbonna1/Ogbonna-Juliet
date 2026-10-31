"use client";

import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  // Start fully typed so server HTML has meaningful text (no layout shift, good for SEO).
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1800 : empty ? 300 : deleting ? 45 : 85;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="whitespace-nowrap text-brand">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>{text}</span>
      <span aria-hidden className="ml-0.5 inline-block w-[3px] animate-pulse bg-brand align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}
