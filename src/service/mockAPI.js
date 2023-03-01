import axios from 'axios';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get(
      `https://${process.env.REACT_APP_PROJECT_TOKEN}.mockapi.io/contacts`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeContactById = async id => {
  try {
    const { data } = await axios.delete(
      `https://${process.env.REACT_APP_PROJECT_TOKEN}.mockapi.io/contacts/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postContact = async contact => {
  try {
    const { data } = await axios.post(
      `https://${process.env.REACT_APP_PROJECT_TOKEN}.mockapi.io/contacts`,
      contact
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
