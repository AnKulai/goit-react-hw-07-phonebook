import ContactList from './ContactList/ContactList';
import Filterblock from './Filterblock/Filterblock';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';

const App = () => {
  console.log(process.env);
  console.log(1);
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
