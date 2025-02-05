"use server"
import { revalidatePath } from 'next/cache';
import { API_URL } from '@/app/constants/api-url';

export default async function TransactionUpdateAction(_, formData) {
  const _id = formData.get('id');
  const title = formData.get('title');
  const amount = Number(formData.get('amount'));
  const category = formData.get('category');
  const transaction_date = formData.get('date');
  const isexpense = formData.get('isexpense') === 'on';
  
  if (!title || !amount || !category || !transaction_date) {
    return { message: 'All fields are required!' };
  }

  await fetch(API_URL, {
    method: 'PUT',
    body: JSON.stringify({ "_id":_id, "title":title, "amount":amount, "category":category, "transaction_date":transaction_date, "isexpense":isexpense}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidatePath(`/edit/${_id}`);
}
