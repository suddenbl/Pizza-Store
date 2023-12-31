import React, { useContext } from 'react';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const clearInput = () => {
    setSearchValue('');
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="64.001px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 60 64.001"
        width="60px"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Binocular">
          <g>
            <path d="M4,48.001h16v-4H4V48.001z M26,6.001c0-1.105-0.896-2-2-2H12    c-1.104,0-2,0.895-2,2v4c0,1.104,0.896,2,2,2h12c1.104,0,2-0.896,2-2V6.001z M40,44.001v4h16v-4H40z M50,10.001v-4    c0-1.105-0.896-2-2-2H36c-1.104,0-2,0.895-2,2v4c0,1.104,0.896,2,2,2h12C49.104,12.001,50,11.105,50,10.001z M32,20h-4    c-1.104,0-2,0.896-2,2v16.001c0,1.104,0.896,2,2,2h4c1.104,0,2-0.896,2-2V22C34,20.896,33.104,20,32,20z" />
          </g>
        </g>
        <g id="Binocular_1_">
          <g>
            <path d="M2,48.001l-2,12c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4    l-2-12H2z M20,0h-4c-2.209,0-4,1.791-4,4.001h12C24,1.791,22.209,0,20,0z M38,48.001l-2,12c0,2.209,1.791,4,4,4h16    c2.209,0,4-1.791,4-4l-2-12H38z M44,0h-4c-2.209,0-4,1.791-4,4.001h12C48,1.791,46.209,0,44,0z M24,16.001v-4H12v4H6    c-1.104,0-2,0.895-2,2L0,42c0,1.105,0.896,2.001,2,2.001h22c1.104,0,2-0.896,2-2.001V18.001C26,16.896,25.104,16.001,24,16.001z     M58,44.001c1.104,0,2-0.896,2-2.001l-4-23.999c0-1.105-0.896-2-2-2h-6v-4H36v4c-1.104,0-2,0.895-2,2V42    c0,1.105,0.896,2.001,2,2.001H58z" />
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={clearInput}
          className={styles.clearInput}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
