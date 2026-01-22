"use client";

import { upload } from "@imagekit/next";
import Image from "next/image";
import React, { useState } from "react";

interface FileUploadProps {
  onSuccess: (res: any) => void;
  onProgress?: (progress: any) => void;
  fileType?: "video";
}

export const FileUpload = ({
  onSuccess,
  onProgress,
  fileType,
}: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File) => {
    if (fileType === "video") {
      if (!file.type.startsWith("/")) {
        setError("please upload a valid file");
        return false;
      }
    }

    if (file.size > 100 * 1024 * 1024) {
      setError("File size must be less than 100MB");
      return false;
    }
    return true;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !validateFile(file)) return;

    setUploading(true);
    setError(null);

    try {
      const AuthRes = await fetch("/api/imagekit-auth");
      const { authenticationParameters } = await AuthRes.json();

      const uploadResponse = await upload({
        file,
        fileName: file.name,
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        signature: authenticationParameters.signature,
        expire: authenticationParameters.expire,
        token: authenticationParameters.token,
        onProgress: (event: any) => {
          if (event.lengthComputable && onProgress) {
            const percent = (event.loaded / event.total) * 100;
            onProgress(Math.round(percent));
          }
        },
      });
      onSuccess(uploadResponse);
    } catch (err: any) {
      console.error(err.message);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <input
        className="bg-white border border-gray-300"
        placeholder="CHOOSE FILE"
        type="file"
        accept={fileType === "video" ? "video/*" : ""}
        onChange={handleFileChange}
      />
      {uploading && <span>Loading......</span>}
    </>
  );
};
