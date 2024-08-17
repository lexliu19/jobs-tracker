import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: { type: String, default: '' },
  location: { type: String, default: 'remote' },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
});

export default mongoose.model('User', UserSchema);
