import { TransactionCreate } from '../_components/transaction-create';

export default async function Page() {
  return (
    <main className=" p-6">
      <TransactionCreate />
    </main>
  );
}
