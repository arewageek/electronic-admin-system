import mongoose, { Document, Schema } from "mongoose";

export interface IUpload extends Document {
  name: string;
  type: string;
  size: string;
  url: string;
  user: string;
  approved: boolean;
}

const UploadSchema: Schema = new Schema({
  name: { type: String, required: false },
  type: { type: String, required: false, default: "others" },
  size: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: String, required: true },
  approved: { type: Boolean, required: true, default: false },
});

export const Upload =
  mongoose.models.Upload || mongoose.model<IUpload>("Upload", UploadSchema);
