import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

function linkClasses({ isActive }) {
  return clsx(css.authNavLink, {
    [css.active]: isActive,
  });
}

export const AuthNav = () => {
  return (
    <ul className={css.authNavList}>
      <li>
        <NavLink className={linkClasses} to="/register">
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClasses} to="/login">
          Sign In
        </NavLink>
      </li>
    </ul>
  );
};
