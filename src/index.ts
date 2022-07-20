import { User } from '../models/User';

const user = new User({ name: 'Eleri', age: 27 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('user changed');
});

user.set({ name: 'Ellurix' });
