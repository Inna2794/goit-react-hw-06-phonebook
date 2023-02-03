import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/sliceContacts';
import ContactsListItem from 'components/ContactsItem';
import { ContactList } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  console.log(contacts);

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt));
  };

  const filteredContacts = () => {
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  const result = filteredContacts();
  console.log(result);

  return (
    <ContactList>
      {result.map(({ name, number, id }) => {
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
