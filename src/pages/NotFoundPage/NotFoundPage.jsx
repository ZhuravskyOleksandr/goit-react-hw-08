import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={css.notFoundWrapper}>
      <Link className={css.notFoundLink} to="/">
        Back to Home
      </Link>
    </div>
  );
}
