import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  tel?: string;
  password?: string;
  bio?: string;
  role?: "hod" | "staff";
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tel: { type: String, required: false },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["hod", "staff"] },
    bio: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
