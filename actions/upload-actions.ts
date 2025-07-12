"use server";

import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";

export async function generatePdfSummary(uploadResponse: Array<{
    serverData: {
        serverData: {
            userId: string;
            file: {
                url: string;
                name: string;
            };
        };
    };
}>)
    {
        if (!uploadResponse) {
            return{
            success: false,
            error: 'Error uploading file. Please try again with another file.',
            data: null
            };
                             }

        const {
            serverData: {
                serverData: {
                    userId,
                    file: {
                        url: pdfUrl,
                        name: fileName
                    },
                },
            },
        } = uploadResponse[0];

    if (!pdfUrl ) {
        return{
            success: false,
            error: 'Error uploading file. Please try again with another file.',
            data: null
        };
        }

    try{
      const pdfText =  await fetchAndExtractPdfText(pdfUrl);
       console.log({pdfText});

       let summary;
       try{
        summary=await generateSummaryFromGemini(pdfText);
        console.log({summary});
       }
       
       catch(geminierror){
        console.error('gemini API failed',geminierror);
        throw new Error('Gemini API failed to generate summary')
       }
    }catch(err){
        return{
            success: false,
            error: 'Error uploading file. Please try again with another file.',
            data: null
        };
    }
}

