import { ONE_PAGERS_PUBLIC_DATA_ARRAY } from '../data/onepagers';
import { OnePager } from '../components/OnePager';
import { OnePagerPublicData } from '../model/model';

type OnePagerPageData = {
  onePagerUrl: string;
};

/** Render a One Pager Page. */
export default function OnePagerPage({ onePagerUrl }: OnePagerPageData) {
  return <OnePager onePagerUrl={onePagerUrl}></OnePager>;
}

export async function getStaticPaths() {
  const paths = ONE_PAGERS_PUBLIC_DATA_ARRAY.map(
    (onePager: OnePagerPublicData) => {
      return {
        params: {
          onePagerUrl: onePager.url,
        },
      };
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      onePagerUrl: params.onePagerUrl,
    },
  };
}
