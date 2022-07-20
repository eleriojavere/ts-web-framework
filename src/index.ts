import { User } from '../models/User';

const user = new User({ name: 'Eleri', age: 27 });

user.on('change', () => {
  console.log('jau');
});
