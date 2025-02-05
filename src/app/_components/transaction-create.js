'use client';

import { useActionState } from 'react';
import TransactionCreateAction from '../_actions/transaction-create';
import { PlusCircle } from 'lucide-react';
import { ArrowLeft} from 'lucide-react';
import Link from 'next/link';

export const TransactionCreate = () => {
  const [state, formAction, pending] = useActionState(TransactionCreateAction, null);

  return (
    
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 group transition-colors"       >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Transactions</span>
      </Link>

      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <form action={formAction} className="space-y-6">
        <section className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Create Transaction</h3>
          <p className="text-sm sm:text-base text-gray-500 mt-1">Input your transaction activity</p>
        </section>

        <div className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input type="text" id="title" name="title" placeholder="Enter transaction title" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
          </div>

          <div className="space-y-1">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">Rp.</span>
              </div>
              <input type="number" id="amount" name="amount" placeholder="0.00" className="block w-full rounded-md border-gray-300 pl-10 pr-7 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select id="category" name="category" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required>
              <option value="general">General</option>
              <option value="gift">Gift</option>
              <option value="salary">Salary</option>
              <option value="food">Food</option>
              <option value="toys">Toys</option>
              <option value="vacation">Vacation</option>
              <option value="cloth">Cloth</option>
              <option value="debt">Debt</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input type="date" id="date" name="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
          </div>

          <div className="flex items-center space-x-3">
            <input type="checkbox" id="isexpense" name="isexpense" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="isexpense" className="text-sm font-medium text-gray-700">
              This is an expense
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="flex w-full justify-center items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <PlusCircle className="w-5 h-5 mr-2" disabled={pending} />
            {pending ? "Loading...": "Add Transaction"}
          </button>
        </div>
        {state?.message && <div className="text-red-600">{state.message}</div>}
      </form>
      </div>
      </div>

  );
};
