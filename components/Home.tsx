import Head from 'next/head';
import Link from 'next/link';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';

import { Header } from './Header';
import { dataMap } from '../data/onepagers';
import { OnePagerData } from '../model/model';

export const OnePagerLinks = () => {
  return (
    <>
      {Array.from(dataMap.values()).map((onePagerData: OnePagerData) => (
        <Box
          key={onePagerData.companyName}
          d='flex'
          alignItems='baseline'
          marginBottom='10px'
        >
          <Link href='/[onePagerSlug]' as={`/${onePagerData.urlSlug}`}>
            <a>{onePagerData.companyName} </a>
          </Link>

          <Text margin='0'>: {onePagerData.briefDescription}</Text>
        </Box>
      ))}
    </>
  );
};

export const Home = () => {
  return (
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box w='xl'>
          <Heading as='h1' size='xl'>
            Welcome to One Pager Alpha!
          </Heading>

          <Heading as='h2' size='md'>
            View active OnePagers
          </Heading>
          <Divider />
          <OnePagerLinks />
        </Box>
      </Box>
    </Box>
  );
};
