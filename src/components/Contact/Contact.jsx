import css from './Contact.module.css';
import { HiUser, HiPhone } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

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
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
