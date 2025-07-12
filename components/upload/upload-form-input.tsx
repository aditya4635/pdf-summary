"use client";

import { forwardRef } from 'react';
import {Button} from '../ui/button'
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const UploadFormInput= forwardRef<HTMLFormElement,UploadFormInputProps>(({ onSubmit,isLoading }, ref)=> {
  return (
    <div className='container mt-12'>
        <form ref={ref} className='flex flex-col items-center justify-center' onSubmit={onSubmit}>
            <div className='flex items-center justify-end gap-1.5'>
            <Input id='file' name='file' type='file' className={cn('mt-4', isLoading && 'opacity-50 cursor-not-allowed')} accept='application/pdf' required 
            disabled={isLoading} />
            <Button disabled={isLoading} className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>{isLoading? <><Loader2 className='mr-2 h-4 w-4 animate-spin'/>
            processing...</> : 'Upload your pdf'}</Button>
            </div>
        </form>
    </div>
  );
});
UploadFormInput.displayName ='UploadFormInput';

export default UploadFormInput;


