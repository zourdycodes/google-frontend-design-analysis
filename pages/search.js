import React from 'react';
import Head from 'next/head';

import { SearchHeader } from '../components';

const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Search */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
};

export default Search;
