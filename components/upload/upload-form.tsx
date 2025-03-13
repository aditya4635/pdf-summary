"use client";

import React from 'react'
import UploadFormInput from './upload-form-input'
import {z} from 'zod'


const schema = z.object({
    file: z
    .instanceof(File,{message: 'Invalid file'})
    .refine((file) => file.size <= 24*1024*1024,  'File size must be less than 20MB ')
    .refine((file) => file.type.startsWith('application/pdf'), 'File must be a PDF')
});


export default function UploadForm() {
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File ;


    //validation of the fields
    const validatedFields = schema.safeParse({ file });

    if (!validatedFields.success) {
    alert(validatedFields.error.errors[0].message);
    return;
    };
};
    return (
    <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto'>
    <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}