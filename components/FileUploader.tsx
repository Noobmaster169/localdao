'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import { useDropzone } from 'react-dropzone'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { convertFileToUrl } from '@/utils/filesToUrl'

type FileUploaderProps = {
  onFieldChange: (url: string) => void
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>
  uploadToIpfs: any
}

const FileUploader = ({ imageUrl, onFieldChange, setFiles, uploadToIpfs }: FileUploaderProps) => {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
    await uploadToIpfs(acceptedFiles[0])
    console.log("Uploaded to IPFS!")
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(['image/*']),
  })

  return (
    <div
      {...getRootProps()}
      className={`flex-center items-center justify-center ${imageUrl ? "bg-clear" : "bg-black bg-opacity-40 border-3 border-black border-opacity-40"} flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 md:min-w-[450px] max-w-[450px] max-h-1/3`}>
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-contain object-center max-w-[450px] max-h-[450px]"
          />

        </div>
      ) : (
        <div className="flex items-center justify-center flex-col py-5 bg-secondary bg-opacity-20 p-10 h-full">
          <h3 className="mb-6 mt-2 font-semibold text-[#40A4FF]">Upload your Image</h3>
          <img src="icons/upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2 text-[#40A4FF]">Drag & Drop</h3>
          <p className="p-medium-12 mb-4 text-xs text-[#40A4FF]">SVG, PNG, JPG</p>
          <button type="button" className="rounded-md bg-[#40A4FF] text-background p-3">
            Select from computer
          </button>
        </div>
      )}
    </div>
  )
}

export default FileUploader;