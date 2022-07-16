import { User } from '../models/User';

const user = new User({ name: 'Eleri', age: 27 });

user.save();
user.events.on('change', () => {
  console.log('jau');
});

user.events.trigger('change');
