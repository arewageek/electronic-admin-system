import mongoose, { Schema } from "mongoose";

interface IUserSession {
  userId: string;
  sessionId: string;
}

const SessionSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    sessionId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserSession =
  mongoose.models.UserSession ||
  mongoose.model<IUserSession>("UserSession", SessionSchema);
