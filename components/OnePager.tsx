import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Box,
  Flex,
  Divider,
  Badge,
  Heading,
  Text,
  Avatar,
} from '@chakra-ui/core';

import { ContentCard } from './ContentCard';
import { Header } from './Header';
import { OnePagerData, OnePagerPerson } from '../model/model';
import { getOnePagerData } from '../data/dataService';
import { EMPTY_ONE_PAGER } from '../data/onepagers';

/** Renders a full one pager based on the onePagerUrl. */
export const OnePager = ({ onePagerUrl }: { onePagerUrl: string }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <ContentCard title='Overview' isLoading={isLoading}>
        <Heading as='h1' size='lg' marginRight='10px'>
          {onePagerData.companyName}
        </Heading>
        <Heading as='h2' size='sm' color='grey' fontStyle='italic'>
          {onePagerData.briefDescription}
        </Heading>
        <Flex>
          {onePagerData.industryTags.map((tag: string) => {
            return (
              <Badge
                key={tag}
                rounded='full'
                px='2'
                variantColor='blue'
                marginRight='10px'
              >
                {tag}
              </Badge>
            );
          })}
        </Flex>
        <Content>{onePagerData.detailDescription}</Content>
      </ContentCard>

      <Divider width='50%' />

      <ContentCard title='Founders' isLoading={isLoading}>
        {onePagerData.founders.map((person: OnePagerPerson) => (
          <Founder key={person.name} person={person}></Founder>
        ))}
      </ContentCard>

      <Divider width='50%' />

      <ContentCard title='Finances' isLoading={isLoading}>
        <Heading as='h1' size='lg' marginRight='10px'>
          Funding Stage: {onePagerData.fundraisingStage}
        </Heading>
        <SubTitle>Funds Raised: {onePagerData.fundsRaisedInStage}</SubTitle>
        <SubTitle>Funding Goal: {onePagerData.fundraisingStageGoal}</SubTitle>
      </ContentCard>

      <Divider width='50%' />

      <ContentCard title='Pitch Video' isLoading={isLoading}>
        <SubTitle>
          <a href={onePagerData.pitchVideoLink}>Link to Pitch Video</a>
        </SubTitle>
      </ContentCard>

      <Divider width='50%' />

      <ContentCard isLoading={isLoading}>
        <Flex justifyContent='center'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </Flex>
      </ContentCard>
    </Box>
  );
};

/** Founder Component */
const Founder = ({ person }: { person: OnePagerPerson }) => {
  return (
    <Flex align='center'>
      <Avatar marginRight='10px'></Avatar>
      <Box>
        <Box key={person.name} d='inline-flex' alignItems='baseline'>
          <Heading as='h2' size='md' marginRight='10px' marginBottom='0'>
            {person.name}
          </Heading>
          <Heading
            as='h2'
            size='sm'
            marginRight='10px'
            marginBottom='0'
            fontStyle='emphasis'
          >
            {person.title}
          </Heading>
        </Box>
        <Text fontSize='sm' marginTop='5px'>
          {person.description}
        </Text>
      </Box>
    </Flex>
  );
};

/** Util OnePager Components */
const SubTitle = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
const Content = ({ children }) => <Text fontSize='sm'>{children}</Text>;
