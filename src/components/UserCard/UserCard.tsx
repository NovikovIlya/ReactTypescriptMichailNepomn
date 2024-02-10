import { LocalGithubUser } from '../../types';
import { UseInfo } from '../UseInfo';
import { UserStat, UserStatProps } from '../UserStat';
import { UserTitle } from '../UserTitle';

import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle created={props.created} login={props.login} name={props.name} />
    <p className={`${styles.bio}${!props.bio ? '' : `${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat followers={props.followers} following={props.following} repos={props.repos} />
    <UseInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
