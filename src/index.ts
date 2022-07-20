import { User } from '../models/User';

const user = new User({ name: 'Eleri', age: 27 });

console.log(user.get('age'));

// user.on('change', () => {
//   console.log('jau');
// });
