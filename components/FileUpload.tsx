"use client";

import { upload } from "@imagekit/next";
import Image from "next/image";
import React, { useState } from "react";

interface FileUploadProps {
  onSuccess: (res: any) => void;
  onProgress?: (progress: any) => void;
  fileType?: "video" | "image";
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
      if (!file.type.startsWith("video/")) {
        setError("please upload a valid video file");
        return false;
      }
    }
    if (fileType === "image") {
      if (!file.type.startsWith("image/")) {
        setError("please upload a valid image file");
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
      const { authenticationParameters, publicKey } = await AuthRes.json();

      console.log("Auth Response:", { authenticationParameters, publicKey });

      const uploadResponse = await upload({
        file,
        fileName: file.name,
        publicKey: publicKey,
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
      // Debug: Log the actual response structure
      console.log("ImageKit Response:", uploadResponse);
      // Transform ImageKit response to match expected format
      if (fileType === "image") {
        onSuccess({
          thumbnail: uploadResponse.url,
        });
      } else if (fileType === "video") {
        onSuccess({
          videoUrl: uploadResponse.url,
          thumbnail: uploadResponse.thumbnailUrl || "",
        });
      } else {
        onSuccess({
          url: uploadResponse.url,
          thumbnail: uploadResponse.thumbnailUrl || uploadResponse.url,
        });
      }
    } catch (err: any) {
      setError(err.message || "Upload failed");
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="md:space-y-4 md:flex md:flex-col">
      <input
        className="bg-white border border-gray-300"
        aria-label={fileType === "video" ? "Upload video file" : "Upload image file"}
        placeholder="CHOOSE FILE"
        type="file"
        accept={fileType === "video" ? "video/*" : fileType === "image" ? "image/*" : undefined}
        onChange={handleFileChange}
      />
      {uploading && <span>Loading......</span>}
    </div>
  );
};
