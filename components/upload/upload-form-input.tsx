"use client";
import {Button} from '../ui/button'
import { Input } from '../ui/input';

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function UploadFormInput({ onSubmit } : UploadFormInputProps) {
  return (
    <div className='container mt-12'>
        <form className='flex flex-col items-center justify-center' onSubmit={onSubmit}>
            <div className='flex items-center justify-end gap-1.5'>
            <Input id='file' name='file' type='file' className='mt-4' accept='application/pdf' required />
            <Button  className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>Upload your pdf</Button>
            </div>
        </form>
    </div>
  )
}