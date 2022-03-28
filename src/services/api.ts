import axios from 'axios';

export const api = axios.create({
  /* Caso queira testar localmente, apenas remover o comentário a url do localhost
   e comentar a linha da url na web */
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://dtmoney-beta-ten.vercel.app/api',
})