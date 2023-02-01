import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/sliceContacts';
import ContactsListItem from 'components/ContactsItem';
import { ContactList } from './Contacts.styled';

const Contacts = () => {
  let contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt));
  };

  const filter = useSelector(state => state.filter.value);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <ContactList>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleOnClick}
          />
        );
      })}
    </ContactList>
  );
};

export default Contacts;
