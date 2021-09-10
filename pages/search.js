import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { API_KEY, CONTEXT_KEY } from '../keys';
import { Response } from '../Response';

import { SearchHeader, SearchResults } from '../components';

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Search */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || 0;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      )
        .then((response) => response.json())
        .catch((err) => {
          throw new Error(`Cannot fetch the data!! ${err}`);
        });

  return {
    props: {
      results: data,
    },
  };
}
