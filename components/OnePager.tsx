import Head from 'next/head';
import Link from 'next/link';
import { Box, Divider, Badge, Heading, Text, Avatar } from '@chakra-ui/core';

import { ContentCard } from './ContentCard';
import { Header } from './Header';
import { OnePagerData, OnePagerPerson } from '../model/model';

const Title = ({ children }) => (
  <Heading as='h1' size='lg' marginRight='10px'>
    {children}
  </Heading>
);
const SubTitle = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
const Content = ({ children }) => <Text fontSize='md'>{children}</Text>;

const Founder = ({ person }: { person: OnePagerPerson }) => {
  return (
    <Box key={person.name} d='flex' alignItems='center'>
      <Avatar marginRight='10px'></Avatar>
      <Title>{person.name}</Title>
      <SubTitle>{person.title}</SubTitle>
      <Content>{person.description}</Content>
    </Box>
  );
};

export const OnePager = ({ onePagerData }: { onePagerData: OnePagerData }) => {
  return (
    <Box>
      <Head>
        <title>{onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <ContentCard title='Company Overview'>
        <Box d='flex' alignItems='center'>
          <Title>{onePagerData.companyName}</Title>
          <Title> | </Title>
          <SubTitle>{onePagerData.briefDescription}</SubTitle>
        </Box>
        <Box d='flex'>
          {onePagerData.industryTags.map((tag: string) => {
            return (
              <Badge
                key={tag}
                rounded='full'
                px='2'
                variantColor='teal'
                marginRight='10px'
              >
                {tag}
              </Badge>
            );
          })}
        </Box>
        <Content>{onePagerData.detailDescription}</Content>
      </ContentCard>

      <Divider width='50%' />

      <ContentCard title='Founders'>
        {onePagerData.founders.map((person: OnePagerPerson) => (
          <Founder person={person}></Founder>
        ))}
      </ContentCard>

      <Divider width='50%' />

      <ContentCard title='Finances'>
        <Title>Funding Stage: {onePagerData.fundraisingStage}</Title>
        <SubTitle>Funds Raised: {onePagerData.fundsRaisedInStage}</SubTitle>
        <SubTitle>Funding Goal: {onePagerData.fundraisingStageGoal}</SubTitle>
      </ContentCard>

      <Divider width='50%' />

      <ContentCard title='Pitch Video'>
        <SubTitle>
          Link:{' '}
          <a href='onePagerData.pitchVideoLink'>
            {onePagerData.pitchVideoLink}
          </a>
        </SubTitle>
      </ContentCard>

      <Divider width='50%' />

      <ContentCard>
        <Box d='flex' justifyContent='center'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </Box>
      </ContentCard>
    </Box>
  );
};
