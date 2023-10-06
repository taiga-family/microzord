import {useState} from 'react';
import styles from './app.module.scss';
import star from './star.svg';

export function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>
        Remote react app <img src={star} alt="star" />{' '}
      </h3>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  );
}

export default App;
