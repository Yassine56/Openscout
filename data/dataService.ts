import { OnePagerData, OnePagerPublicData } from '../model/model';
import {
  ONE_PAGERS_ALL_DATA_MAP,
  ONE_PAGERS_PUBLIC_DATA_ARRAY,
} from './onepagers';

const RESOLVE_TIME_MS = 2000;

// Return all OnePagers
export const getAllPublicOnePagerData = (): Promise<OnePagerPublicData[]> =>
  Promise.resolve(ONE_PAGERS_PUBLIC_DATA_ARRAY);

// Return a single OnePager
export const getOnePagerData = (url: string): Promise<OnePagerData> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(ONE_PAGERS_ALL_DATA_MAP.get(url)), RESOLVE_TIME_MS)
  );
