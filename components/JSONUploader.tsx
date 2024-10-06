"use client";

import { useCallback, Dispatch, SetStateAction, useState } from "react";
import { useDropzone } from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { convertFileToUrl } from "@/utils/filesToUrl";

type JSONUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
  uploadToIpfs: any;
};

const JSONUploader = ({
  imageUrl,
  onFieldChange,
  setFiles,
  uploadToIpfs,
}: JSONUploaderProps) => {
  const [fileName, setFileName] = useState<string>("");
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setFileName(acceptedFiles[0].name);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
    await uploadToIpfs(acceptedFiles[0]);
    console.log("Uploaded to IPFS!");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: generateClientDropzoneAccept([".json"]),
    accept: {
      "application/json": [".json"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex-center items-center justify-center ${
        imageUrl
          ? // ? "bg-clear"
            "bg-black bg-opacity-40 border-3 border-black border-opacity-40"
          : "bg-black bg-opacity-40 border-3 border-black border-opacity-40"
      } flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 min-w-[400px] max-h-1/4`}
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex flex-col h-full w-full flex-1 justify-center items-center bg-secondary bg-opacity-20">
          <h3 className="mb-6 mt-2 font-semibold text-[#40A4FF] text-center">
            File Uploaded!
          </h3>
          <p className="mb-6 mt-2 text-[#40A4FF] text-center">{fileName}</p>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col py-5 bg-secondary bg-opacity-20 p-10 h-full">
          <h3 className="mb-6 mt-2 font-semibold text-[#40A4FF] text-center">
            Upload your TLSNotary Proof (JSON)
          </h3>
          <img
            src="icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2 text-[#40A4FF]">Drag & Drop</h3>
          <p className="p-medium-12 mb-4 text-xs text-[#40A4FF]">.json</p>
          <button
            type="button"
            className="rounded-md bg-[#40A4FF] text-background p-3"
          >
            Select from computer
          </button>
        </div>
      )}
    </div>
  );
};

export default JSONUploader;
