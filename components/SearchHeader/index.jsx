import Image from 'next/image';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';

import { Avatar } from '../Avatar';

export const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();

    const searchTerm = searchInputRef.current.value;

    if (!searchTerm) return;

    router.push(`/search?term=${searchTerm}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="logo google"
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            type="text"
            ref={searchInputRef}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer " />
          <button onClick={search} hidden type="submit">
            Search
          </button>
        </form>

        <Avatar
          className="ml-auto"
          url="https://picsum.photos/200"
          seo="profile user"
        />
      </div>
    </header>
  );
};
