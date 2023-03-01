import Contact from 'components/Contact/Contact';
import css from './ContactList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'store/contactsReducer/contactsOperations';
import { reselect } from 'store/selectors/selectors';

const ContactList = () => {
  const contacts = useSelector(reselect.contactsByFilter);
  const dispatch = useDispatch();

  // Default loading contacts from mockAPI

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ol className={css.contactList}>
      {contacts.map((contact, index) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          index={++index}
        />
      ))}
    </ol>
  );
};

export default ContactList;
