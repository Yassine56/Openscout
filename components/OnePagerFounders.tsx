import React from 'react';
import { Box, Flex, Heading, Text, Avatar } from '@chakra-ui/core';

import { OnePagerData, OnePagerPerson } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFoundersProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Founders card. */
export const OnePagerFounders = ({
  onePagerData,
  isLoading,
}: OnePagerFoundersProps) => {
  return (
    <ContentCard title='Founders' isLoading={isLoading}>
      {onePagerData.founders.map((person: OnePagerPerson) => (
        <Founder key={person.name} person={person}></Founder>
      ))}
    </ContentCard>
  );
};

/** Renders a Founder component. */
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
