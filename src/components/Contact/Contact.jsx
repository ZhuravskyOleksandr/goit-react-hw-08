import css from './Contact.module.css';
import { HiUser, HiPhone } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { actions } from '../../constants';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(
      openModal({
        modalData: {
          id,
          name,
          number,
        },
        actionType: actions.editContact,
      })
    );
  }

  function handleDelete() {
    dispatch(
      openModal({
        modalData: {
          id,
          name,
          number,
        },
        actionType: actions.deleteContact,
      })
    );
  }

  return (
    <div className={css.contactListItemWrapper}>
      <div>
        <p className={css.userInfo}>
          <HiUser size={20} /> {name}
        </p>
        <p className={css.userInfo}>
          <HiPhone size={20} /> {number}
        </p>
      </div>
      <div>
        <button className={css.contactBtn} type="button" onClick={handleEdit}>
          Edit
        </button>
        <button className={css.contactBtn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
