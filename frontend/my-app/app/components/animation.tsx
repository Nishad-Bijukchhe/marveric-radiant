'use client';
import { useState, useEffect } from "react";

const TypingMaveric = () => {
  const word = "Maverick";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const speed = isDeleting ? 80 : 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(word.substring(0, index + 1));
        setIndex(prev => prev + 1);

        if (index + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 800); // pause before deleting
        }
      } else {
        setText(word.substring(0, index - 1));
        setIndex(prev => prev - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return <span className="text-green-600">{text}</span>;
};

export default TypingMaveric;
