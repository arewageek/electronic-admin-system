"use server";

import { connectMongoDB } from "@/lib/db";
import { IUpload, Upload } from "@/models/uploads";
import { UserSession } from "@/models/userSession";
import { put } from "@vercel/blob";
import { cookies } from "next/headers";

export type TUpload = {
  size: string;
  name: string;
  type: string;
  url: string;
  user: string;
};

export async function uploadFile(file: File) {
  const blob = await put(file.name, file, { access: "public" });
  console.log({ blob });
}

export async function fetchUploads(uid: string): Promise<{
  status: 200 | 500;
  uploads?: TUpload[];
}> {
  try {
    connectMongoDB();

    const userId = uid;
    const uploads = await Upload.find({ user: userId });
    console.log({ uploads, userId });
    return { status: 200, uploads: uploads };
  } catch (error) {
    console.log({ error });
    return { status: 500 };
  }
}

export async function getUserId(): Promise<string | null> {
  try {
    const cc = cookies();
    const sessionIdCookie = cc.get("sessionId");
    const sessionId = sessionIdCookie?.value;
    const session = await UserSession.findOne({ sessionId });
    const userId = await session.userId;
    return userId;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function saveUploadInDB(data: {
  name: string;
  type: string;
  size: number;
  url: string;
  user: string;
  approved: boolean;
}): Promise<"success" | null> {
  try {
    connectMongoDB();
    const newUpload = new Upload(data);

    newUpload.save();

    console.log("done");
    return "success";
  } catch (error) {
    console.log({ error });
    return null;
  }
}
