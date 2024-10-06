import { saveUploadInDB } from "@/actions/uploads.actions";
import { storage } from "@/config/firebase";
import { Upload } from "@/models/uploads";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";

export const uploadFile = async (
  file: File,
  folder: string,
  userId: string
) => {
  try {
    const filename = nanoid();
    const storageRef = ref(
      storage,
      `${folder}/${filename}.${file.name.split(".").pop()}`
    );
    const res = await uploadBytes(storageRef, file);

    // // create file in storage
    console.log("start storage");
    const upload = await saveUploadInDB({
      name: filename,
      type: res.metadata.contentType!,
      size: file.size!,
      url: res.metadata.fullPath,
      user: userId,
      approved: false,
    });

    console.log({ upload });

    return res.metadata.fullPath;
  } catch (error) {
    throw error;
  }
};

export const getFile = async (path: string) => {
  try {
    const fileRef = ref(storage, path);
    return getDownloadURL(fileRef);
  } catch (error) {
    throw error;
  }
};
