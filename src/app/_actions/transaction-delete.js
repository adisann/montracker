'use server';
import {API_URL} from "@/app/constants/api-url";
import {revalidatePath} from "next/cache";
export async function TransactionDeleteAction(_,formData) {
    const _id = formData.get('transaction_id');
    
    

    await fetch(API_URL, {
      method: 'DELETE',
      body: JSON.stringify([ _id ]),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    revalidatePath('/');
  }