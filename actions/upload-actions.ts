"use server";

export default function generatePdfSummary(uploadResponse:{
    serverData:{
               userId: string;
               file:{
                url:'string';
                name:'string';
                    }
                }
            })
    {
        if (!uploadResponse) {
            return{
            success: false,
            error: 'Error uploading file. Please try again with another file.',
            data: null
            }
                             }

        const {serverData: {
            userId,
            file: {
                url : pdfUrl,
                name: pdfName
                    },
            },}= uploadResponse[0];

    if (!pdfUrl || !pdfName) {
        return{
            success: false,
            error: 'Error uploading file. Please try again with another file.',
            data: null
        };
        }

    try{
      const pdfText = await fetchAndExtractPdfText(pdfUrl);
    }catch(err){
        return{
            success: false,
            error: 'Error uploading file. Please try again with another file.',
            data: null
        };
    }
