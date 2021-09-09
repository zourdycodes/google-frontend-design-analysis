import React from 'react';
import { GlobeIcon } from '@heroicons/react/solid';

export const Footer = ({ country, colData1, colData2, wordPitcher }) => {
  return (
    <footer className="grid w-full divide-y-[1px]  bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>{country}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> {wordPitcher}
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          {colData1.map((word, index) => {
            return <p key={index}>{word}</p>;
          })}
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          {colData2.map((word, index) => {
            return <p key={index}>{word}</p>;
          })}
        </div>
      </div>
    </footer>
  );
};
