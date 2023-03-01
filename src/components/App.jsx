import ContactList from './ContactList/ContactList';
import Filterblock from './Filterblock/Filterblock';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';

const App = () => {
  console.log(process.env.REACT_APP_TEST);
  console.log(process.env.REACT_APP_TEST);
  console.log(process.env);
  return (
    <>
      <Section title="PhoneBook">
        <Phonebook />
        <Filterblock title="Filter by Name" />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};

export default App;
