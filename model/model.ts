export interface OnePagerPerson {
  name: string;
  title: string;
  description?: string;
}

export interface OnePagerData {
  companyName: string;
  urlSlug: string;
  industryTags: string[];
  briefDescription: string;
  detailDescription?: string;
  pitchVideoLink?: string;
  fundraisingStage?: string;
  fundraisingStageGoal?: number;
  fundsRaisedInStage?: number;
  founders?: OnePagerPerson[];
  investors?: OnePagerPerson[];
}
