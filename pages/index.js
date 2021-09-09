import Head from 'next/head';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';

import { Avatar, Footer } from '../components';

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const columnData1 = ['Advertising', 'Business', 'How Search works'];
  const columnData2 = ['Privacy', 'Terms', 'Settings'];

  function search(e) {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google - Front End Product Design Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer" />

          <Avatar url="https://picsum.photos/200" seo="profile user" />
        </div>
      </header>

      {/* BODY/CONTENT */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="logo google"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2l space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} type="button" className="btn">
            Google Search
          </button>
          <button onClick={search} type="button" className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* FOOTER */}
      <Footer
        country="Poland"
        colData1={columnData1}
        colData2={columnData2}
        wordPitcher="Carbon neutral since
          2007"
      />
    </div>
  );
}
