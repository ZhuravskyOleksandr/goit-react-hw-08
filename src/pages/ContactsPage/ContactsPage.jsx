import css from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectContactsError,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactBook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <b>{error}</b>}
      {contacts.length > 0 || error ? (
        <ContactList />
      ) : (
        <b>
          The contact book is empty. You can add a contact using the form above.
        </b>
      )}
    </div>
  );
}
