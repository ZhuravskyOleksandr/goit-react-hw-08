import css from './Loader.module.css';
import { Blocks } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.blocksLoader}>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        visible={true}
      />
    </div>
  );
}
