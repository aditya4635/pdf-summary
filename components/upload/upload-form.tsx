"use client";

import React from 'react'
import UploadFormInput from './upload-form-input'
import {z} from 'zod'
import { useUploadThing } from '@/utils/upload.thing';
import { toast } from 'sonner';


const schema = z.object({
    file: z
    .instanceof(File,{message: 'Invalid file'})
    .refine((file) => file.size <= 24*1024*1024,  'File size must be less than 20MB ')
    .refine((file) => file.type.startsWith('application/pdf'), 'File must be a PDF')
});


export default function UploadForm() {
    
    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
          alert("uploaded successfully!");
        },
        onUploadError: (err) => {
          toast("Error occurred while uploading file. Please try again with another file.");
        },
        onUploadBegin: (file: string) => {
          console.log("upload has begun for", file);
        },
      });
    
    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File ;


    //validation of the fields
    const validatedFields = schema.safeParse({ file });

    if (!validatedFields.success) {
    toast(validatedFields.error.errors[0].message);
    return;
    }
    //upload the pdf to upload pdf
    const resp =await startUpload([file])
    if (!resp) {
      toast('Error uploading file. Please try again with another file.')
      return;
    }
    toast('Uploading file. Please wait our AI is reading through your pdf.')
};
    return (

    <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto'>
    <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}