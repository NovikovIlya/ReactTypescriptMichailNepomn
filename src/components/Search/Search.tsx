import { useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import styles from './Search.module.scss';
import { Button } from '../Button';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type forFiles = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [] = useState();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & forFiles>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>

        <input
          type="text"
          placeholder="Search GitHub username..."
          className={styles.textField}
          id="serch"
          name="username"></input>

        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
