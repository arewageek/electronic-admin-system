import { getUserId } from "@/actions/uploads.actions";
import { Upload } from "@/models/uploads";
import { UserSession } from "@/models/userSession";
// import { put } from "@vercel/blob";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { storage } from "@/config/firebase";
import { ref, uploadBytes } from "firebase/storage";

// export async function POST(request: Request): Promise<NextResponse> {
//   try {
//     const { searchParams } = new URL(request.url);
//     const filename = searchParams.get("filename");

//     const blob = await put(filename!, request.body!, {
//       access: "public",
//     });

//     let size: number;

//     const cc = cookies();
//     const sessionIdCookie = cc.get("sessionId");
//     const sessionId = sessionIdCookie?.value;
//     const session = await UserSession.findOne({ sessionId });
//     const userId = await session.userId;

//     console.log({ sessionId, userId });

//     fetch(blob.url)
//       .then((res) => res.blob())
//       .then((res) => {
//         size = res.size;
//         const upload = new Upload({
//           name: filename,
//           url: blob.url,
//           type: blob.contentType?.split("/")[0],
//           size,
//           approved: false,
//           user: userId,
//         });

//         upload.save();
//       });
//     return NextResponse.json({ status: 200, blob });
//   } catch (error) {
//     return NextResponse.json({ status: 500 });
//   }
// }

export async function GET() {
  try {
    const cc = cookies();
    const sessionIdCookie = cc.get("sessionId");
    const sessionId = sessionIdCookie?.value;
    const session = await UserSession.findOne({ sessionId });
    const userId = await session.userId;

    const uploads = await Upload.find({ user: userId });
    console.log({ uploads, userId });
    return NextResponse.json({ status: 200, uploads: uploads });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ status: 500 });
  }
}

// export async function POST(request: Request) {
//   try {
//     const filename = request.body

//     return NextResponse.json({ response: res.metadata.fullPath });
//   } catch (error) {
//     console.log({ error });
//   }
// }
