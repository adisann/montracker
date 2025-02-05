"use server"
import { revalidatePath } from 'next/cache';
import { API_URL } from '@/app/constants/api-url';

export default async function TransactionCreateAction(_, formData) {
  const title = formData.get('title');
  const amount = Number(formData.get('amount'));
  const category = formData.get('category');
  const transaction_date = formData.get('date');
  const isexpense = formData.get('isexpense') === 'on';

  if (!title || !amount || !category || !transaction_date) {
    return { message: 'All fields are required!' };
  }

  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify([{ title, amount, category, transaction_date, isexpense}]),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidatePath('/create');
}
