import Head from 'next/head';
import { Avatar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google - Front End Product Design Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icon */}

          {/* avatar */}
          <Avatar url="https://picsum.photos/200" seo="profile user" />
        </div>
      </header>

      {/* BODY/CONTENT */}

      {/* FOOTER */}
    </div>
  );
}
