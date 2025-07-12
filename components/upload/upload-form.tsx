"use client";

import React from 'react'
import UploadFormInput from './upload-form-input'
import {z} from 'zod'
import { useUploadThing } from '@/utils/upload.thing';
import { toast } from 'sonner';
import {generatePdfSummary} from '@/actions/upload-actions';


const schema = z.object({
    file: z
    .instanceof(File,{message: 'Invalid file'})
    .refine((file) => file.size <= 24*1024*1024,  'File size must be less than 20MB ')
    .refine((file) => file.type.startsWith('application/pdf'), 'File must be a PDF')
});


export default function UploadForm() {
    
    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
          toast.dismiss("upload-toast");
          toast.success("File uploaded successfully!");
        },
        onUploadError: (err) => {
          toast.dismiss("upload-toast");
          toast.error("Error occurred while uploading file. Please try again with another file.");
        },
        onUploadBegin: (file: string) => {
          console.log("upload has begun for", file);
          toast.loading("Uploading file. Please wait our AI is reading through your pdf...", {
            id: "upload-toast"
          });
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
    const resp = await startUpload([file])
    if (!resp || resp.length === 0) {
      toast.error('Error uploading file. Please try again with another file.')
      return;
    }
    

    //parse the pdf using langchain 

    const summary = await generatePdfSummary(resp);
    console.log({summary});

    
    //summarise the pdf
    // save the summary to the database
    //redirect to the [id] summary page
};
    return (

    <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto'>
    <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}