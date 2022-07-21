import { User } from '../models/User';

const user = new User({ id: 1, name: 'newer nameeeh', age: 21 });

user.on('change', () => {
  console.log(user);
});

user.save();
