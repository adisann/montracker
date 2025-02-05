'use client';

import { useActionState } from 'react';
import TransactionUpdateAction from '../_actions/transaction-update';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export const TransactionUpdate = ({id, title, amount, category, transaction_date, isexpense}) => {
    
  const [state, formAction,pending] = useActionState(TransactionUpdateAction, null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
    
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Transactions</span>
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <form action={formAction} className="space-y-6">
            <section className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-600">Update Transaction</h3>
              <p className="text-sm sm:text-base text-gray-500 mt-1">Modify your transaction details</p>
            </section>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <input  name="id" value={id} hidden />
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter transaction title"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  required
                  defaultValue={title}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <div className="relative mt-1 rounded-lg shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">Rp.</span>
                  </div>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="0.00"
                    className="block w-full rounded-lg border-gray-300 pl-10 pr-7 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                    required
                    defaultValue={amount}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  required
                  defaultValue={category}
                >
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

              <div className="space-y-1.5">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  required
                  defaultValue={transaction_date}
                />
              </div>

              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  id="isexpense"
                  name="isexpense"
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  defaultChecked={isexpense}
                />
                <label htmlFor="isexpense" className="text-sm font-medium text-gray-700">
                  This is an expense
                </label>
              </div>
            </div>

            {state?.message && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                {state.message}
              </div>
            )}

            <div className="pt-6">
              <button
                type="submit"
                className="flex w-full justify-center items-center px-4 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};