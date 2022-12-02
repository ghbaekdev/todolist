import axios from 'axios';
import { firebaseConfig } from '../../firebase';

export const instance = axios.create({
  baseURL: firebaseConfig.databaseURL,
});
