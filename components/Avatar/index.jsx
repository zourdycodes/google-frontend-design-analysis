import React from 'react';

export const Avatar = ({ url, seo, className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      src={url}
      alt={seo}
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};
