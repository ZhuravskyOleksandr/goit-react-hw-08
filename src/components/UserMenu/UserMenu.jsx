import css from './UserMenu.module.css';
import { GrLogout } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import { actions } from '../../constants';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.userMenuGreating}>
        Hello, <b className={css.username}>{name}</b>
      </p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => {
          dispatch(openModal({ actionType: actions.logOut }));
        }}
      >
        Log Out <GrLogout />
      </button>
    </div>
  );
}
