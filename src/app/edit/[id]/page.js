import { TransactionUpdate } from '@/app/_components/transaction-update';
import {API_URL} from "@/app/constants/api-url"

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  
  return (
    <main className=" p-6">
      <TransactionUpdate id={data._id} title={data.title} amount={data.amount} category={data.category} transaction_date={data.transaction_date} isexpense={data.isexpense}/>
    </main>
  );
}
