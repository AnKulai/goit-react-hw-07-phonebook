import { createSelector } from 'reselect';

const select = {
  contacts: state => state.contacts.items,
  isLoading: state => state.contacts.isLoading,
  filter: state => state.filter.filter,
};

const reselect = {
  contactsByFilter: createSelector(
    [select.contacts, select.filter],
    (contacts, filter) => {
      if (filter !== '') {
        return contacts.filter(contact =>
          contact.name.toLowerCase().trim().includes(filter)
        );
      }
      return contacts;
    }
  ),
};

export { select, reselect };
