import { User } from '../models/User';

const user = new User({ name: 'Eleri', age: 27 });
// user.set({ name: 'Ellurix' });
// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
  console.log('je');
});

user.on('change', () => {
  console.log('ja');
});

user.trigger('change');
