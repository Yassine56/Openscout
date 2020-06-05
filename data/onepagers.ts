import { OnePagerData, OnePagerPublicData } from '../model/model';
import { facebook1, facebook2, facebook3 } from './founders';

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
  fundRaisingDetails: 'To transform from a school network to a public website',
  founders: [facebook1, facebook2, facebook3],
  pitchVideoLink: 'https://www.youtube.com/watch?v=WzgNAN3dW-I',
};

export const ONE_PAGERS_ALL_DATA_MAP: Map<string, OnePagerData> = new Map([
  [facebook.url, facebook],
]);

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
