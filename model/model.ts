export interface OnePagerPerson {
  name: string;
  title: string;
  description?: string;
}

export interface OnePagerPublicData {
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
}

export interface OnePagerData {
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
  detailDescription?: string;
  founders: OnePagerPerson[];
  fundraisingStage?: string;
  fundraisingStageGoal?: number;
  fundsRaisedInStage?: number;
  fundRaisingDetails?: string;
  pitchVideoLink?: string;
  investors?: OnePagerPerson[];
}
