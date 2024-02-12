import styles from './UseInfo.module.scss';
import { ReactComponent as iconCompany } from '../../assets/icon-company.svg';
import { ReactComponent as iconLocation } from '../../assets/icon-location.svg';
import { ReactComponent as iconTwitter } from '../../assets/icon-twitter.svg';
import { ReactComponent as iconWebsite } from '../../assets/icon-website.svg';
import { InfoItem } from '../InfoItem';

interface UseInfoProps {}

export const UseInfo = ({ blog, company, location, twitter }: any) => {
  const items = [
    {
      //@ts-ignore
      icon: <iconLocation />,
      text: location,
    },
    {
      //@ts-ignore
      icon: <iconCompany />,
      text: blog,
      isLink: true,
    },
    {
      //@ts-ignore
      icon: <iconTwitter />,
      text: twitter,
    },
    {
      //@ts-ignore
      icon: <iconWebsite />,
      text: company,
    },
  ];
  return (
    <div className={styles.useInfo}>
      {items.map((item, index) => {
        return <InfoItem {...item} key={index} />;
      })}
    </div>
  );
};
