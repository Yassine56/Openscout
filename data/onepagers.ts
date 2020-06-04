import { OnePagerPerson, OnePagerData } from '../model/model';

const fooberCEO: OnePagerPerson = {
  name: 'Tori Smith',
  title: 'CEO',
  description: 'Lead multiple large businesses into XXX',
};

const foober: OnePagerData = {
  companyName: 'Foober',
  urlSlug: 'foober',
  industryTags: ['Technology', 'Gig', 'Transportation'],
  briefDescription: 'Get from A to B in under 5 minutes.',
  detailDescription:
    'Foober enables anyone to get to any location in under 5 minutes.',
  founders: [fooberCEO],
};

const ppCEO: OnePagerPerson = {
  name: 'Kim Lee',
  title: 'CEO',
};

const performancePonchos: OnePagerData = {
  companyName: 'Performance Ponchos',
  urlSlug: 'performance-ponchos',
  industryTags: ['fashion', 'wellness', 'utility'],
  briefDescription: 'More than a Poncho',
  detailDescription: '',
  founders: [ppCEO],
};

const hamsterWheelers: OnePagerData = {
  companyName: 'Mask Nation',
  urlSlug: 'mask-nation',
  industryTags: ['service', 'pet', 'technolg'],
  briefDescription: 'Masks for everyone',
  detailDescription: '',
};

export const dataMap: Map<string, OnePagerData> = new Map([
  [foober.urlSlug, foober],
  [performancePonchos.urlSlug, performancePonchos],
]);
