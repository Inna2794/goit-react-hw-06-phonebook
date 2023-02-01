import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export const App = () => {
  return (
    <>
      <h2 style={{ color: '#ff6c00' }}>Phonebook</h2>
      <Form />
      <h2 style={{ color: '#ff6c00' }}>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

//
