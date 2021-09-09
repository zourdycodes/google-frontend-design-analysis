import React from 'react';

export const Avatar = ({ url, seo }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt={seo}
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
    />
  );
};
