'use client';

import { useState } from 'react';

interface RevealAnswerProps {
  children: React.ReactNode;
  buttonText?: string;
}

export default function RevealAnswer({ children, buttonText = "Show Answer" }: RevealAnswerProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="mt-3">
      {!isRevealed ? (
        <button
          onClick={() => setIsRevealed(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
        >
          {buttonText}
        </button>
      ) : (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          {children}
        </div>
      )}
    </div>
  );
}
