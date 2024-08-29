import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  lastName: { type: String, default: '' },
  location: { type: String, default: 'remote' },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },

  avatar: String,
  avatarPublicId: String,
});

// Add a toJSON method to the UserSchema to prevent the password from being returned in the response
UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};
export default mongoose.model('User', UserSchema);
