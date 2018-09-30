import Parse from './parse';
import axios from 'axios';

export const login = (name, pwd) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await Parse.User.logIn(name, pwd);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const touch = () => {
  return new Promise((resolve, reject) => {
    Parse.User.currentAsync().then((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
    });
  });
};

export const logout = () => {
  Parse.User.logOut().then(() => {});
};
