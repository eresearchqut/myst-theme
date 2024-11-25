import React from 'react';

export function MadeWithMyst({ url = 'https://www.qut.edu.au/' }: { url?: string }) {
  return (
    <a
      className="flex mx-auto text-gray-700 w-fit hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="self-center ml-2 text-sm">Queensland University of Technology</span>
    </a>
  );
}

export interface LogoProps {
  width: number;
}
