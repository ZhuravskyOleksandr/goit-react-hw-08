import css from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

function linkClasses({ isActive }) {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
}

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.header}>
      <ul className={css.navList}>
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={linkClasses}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
