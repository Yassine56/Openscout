import { Button } from '@chakra-ui/core';
import Link from 'next/link';

import { OnePagerData } from '../model/model';
import { dataMap } from '../data/onepagers';
import { OnePager } from '../components/onePager';

export default function Post({ onePagerData }: { onePagerData: OnePagerData }) {
  return <OnePager onePagerData={onePagerData}></OnePager>;
}

export async function getStaticPaths() {
  const paths = Array.from(dataMap.keys()).map((slug) => {
    return {
      params: {
        onePagerSlug: slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const onePagerData = dataMap.get(params.onePagerSlug);
  return {
    props: {
      onePagerData,
    },
  };
}
