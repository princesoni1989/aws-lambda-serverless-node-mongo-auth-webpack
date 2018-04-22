import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let UserSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true, unique: true },
    password: String,
});

let User  = mongoose.models.User || mongoose.model('User', UserSchema);
export default User
