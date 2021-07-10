import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    displayName: String,
    email: String,
    password: String,
    communicationUserId: String,
  },
  { autoIndex: true },
);

const User = mongoose.model('User', userSchema);

export default User;
