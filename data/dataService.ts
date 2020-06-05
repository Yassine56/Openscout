import { OnePagerData, OnePagerPublicData } from '../model/model';
import {
  ONE_PAGERS_ALL_DATA_MAP,
  ONE_PAGERS_PUBLIC_DATA_ARRAY,
} from './onepagers';

/**
 * This is a mock service that doesn't call a backend, and
 * the resolve time is meant to mock a delay for retrieving data
 * remotely. Feel free to alter this resolve time to render the
 * page faster during development.
 **/
const RESOLVE_TIME_MS = 1000;

/** Return all public One Pager data. */
export const getAllPublicOnePagerData = (): Promise<OnePagerPublicData[]> =>
  Promise.resolve(ONE_PAGERS_PUBLIC_DATA_ARRAY);

/** Return a single One Pager with all data. */
export const getOnePagerData = (url: string): Promise<OnePagerData> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(ONE_PAGERS_ALL_DATA_MAP.get(url)), RESOLVE_TIME_MS)
  );
