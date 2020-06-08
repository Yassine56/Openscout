import { OnePagerData, OnePagerPublicData } from '../model/model';
import * as founders from './founders';
import * as investors from './investors';

/** An empty one pager, for initial React state */
export const EMPTY_ONE_PAGER: OnePagerData = {
  companyName: '',
  url: '',
  industryTags: [],
  briefDescription: '',
  founders: [],
};

const facebook: OnePagerData = {
  companyName: 'Facebook',
  url: 'facebook',
  industryTags: ['Social Media', 'Messaging', 'Mobile'],
  briefDescription:
    'Online social networking platform for users to connect with friends and family',
  detailDescription:
    'Users can create a profile, share images and other media, send and accept friend requests. Largest social media with more than 2B users worldwide',
  fundraisingStage: 'Seed',
  fundraisingStageGoal: 500000,
  fundsRaisedInStage: 100000,
  fundraisingDetails: 'To transform from a school network to a public website',
  founders: [founders.facebook1, founders.facebook2, founders.facebook3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=WzgNAN3dW-I',
  investors: [investors.investor2],
};

const lendingClub: OnePagerData = {
  companyName: 'Lending Club',
  url: 'lending-club',
  industryTags: ['P2P', 'Consumer Lending', 'Finance'],
  briefDescription: 'P2P platform for creditworthy borrowers and lenders',
  detailDescription:
    'Peer lending network that brings together creditworthy borrowers and investors for simpler borrowing and investing at better rates',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 12000000,
  fundsRaisedInStage: 5000000,
  fundraisingDetails: 'Expand capabilities and accelerate customer growth',
  founders: [founders.lendingClub1, founders.lendingClub2],
  investors: [investors.investor1],
};

const spotify: OnePagerData = {
  companyName: 'Spotify',
  url: 'spotify',
  industryTags: ['music', 'streaming'],
  briefDescription: 'Ad-financed music streaming service	',
  detailDescription:
    'Commercial streaming service that provides digital content from a wide range of artists. Users can search music, create, share playlists, and integrate social media accounts. Can be access on computers or mobile devices.',
  fundraisingStage: 'Series A',
  fundraisingStageGoal: 21600000,
  fundsRaisedInStage: 500000,
  fundraisingDetails: 'Grow music library and licenses, developers salaries',
  founders: [founders.spotify1, founders.spotify2],
  pitchVideoLink: 'https://www.youtube.com/watch?v=ZDXETBfXSuc&t=166s',
  investors: [investors.investor1],
};

const workday: OnePagerData = {
  companyName: 'Workday',
  url: 'workday',
  industryTags: ['SaaS', 'HR', 'Software'],
  briefDescription: 'SaaS provider for enterprises',
  detailDescription:
    'Provides human capital management, payroll, financial management software solutions for enterprises',
  fundraisingStage: 'Pre-Seed',
  fundraisingStageGoal: 15000000,
  fundsRaisedInStage: 1000000,
  fundraisingDetails: 'Develop software platform',
  founders: [founders.workday1, founders.workday2],
  investors: [investors.investor1, investors.investor2],
};

const zynga: OnePagerData = {
  companyName: 'Zynga',
  url: 'zynga',
  industryTags: ['Gaming', 'Mobile'],
  briefDescription: 'Develops and operates social games',
  detailDescription:
    'Offers online social games such as Words With Friends, Zynga Poker and Farmville. Operates games on web, social networking sites and mobile platforms worldwide. Provides advertising services in its games.',
  fundraisingStage: 'Series B',
  fundraisingStageGoal: 29000000,
  fundsRaisedInStage: 10000000,
  fundraisingDetails: 'Game production, acquisition and marketing',
  founders: [founders.zynga1, founders.zynga2, founders.zynga3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=HdVWHAPiqno',
  investors: [investors.investor1, investors.investor3],
};

/** Map of urls to full one pager data. */
export const ONE_PAGERS_ALL_DATA_MAP: Map<string, OnePagerData> = new Map([
  [facebook.url, facebook],
  [lendingClub.url, lendingClub],
  [spotify.url, spotify],
  [workday.url, workday],
  [zynga.url, zynga],
]);

/** Array of all public one pager data. */
export const ONE_PAGERS_PUBLIC_DATA_ARRAY: OnePagerPublicData[] = Array.from(
  ONE_PAGERS_ALL_DATA_MAP.values()
).map((onePager: OnePagerData) => {
  return {
    companyName: onePager.companyName,
    url: onePager.url,
    industryTags: onePager.industryTags,
    briefDescription: onePager.briefDescription,
  };
});
