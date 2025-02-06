import Link from 'next/link';
import { API_URL } from '@/app/constants/api-url';
import { CalendarDays, ArrowUpCircle, ArrowDownCircle, Edit, Trash2, PlusCircle } from 'lucide-react';
import { TransactionDelete } from '@/app/_components/transaction-delete';

export const TransactionRead = async () => {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  const totalIncome = data.reduce((sum, item) => (!item.isexpense ? sum + item.amount : sum), 0);
  const totalExpense = data.reduce((sum, item) => (item.isexpense ? sum + item.amount : sum), 0);
  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <section className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Your Transactions</h3>
        <p className="text-sm sm:text-base text-gray-500 mt-1">Overview of your financial activities</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h4 className="text-sm text-gray-500 font-medium">Total Income</h4>
          <p className="text-lg sm:text-xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h4 className="text-sm text-gray-500 font-medium">Total Expense</h4>
          <p className="text-lg sm:text-xl font-bold text-red-600">${totalExpense.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h4 className="text-sm text-gray-500 font-medium">Balance</h4>
          <p className="text-lg sm:text-xl font-bold text-blue-600">${totalBalance.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <Link href="/create" className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Transaction
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600">Title</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600">Amount</th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600">Category</th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600">Date</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600">Type</th>
                <th className="px-4 sm:px-6 py-3 text-center text-xs font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 sm:px-6 py-3">
                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-3">
                    <div className={`text-sm font-semibold ${item.isexpense ? 'text-red-600' : 'text-green-600'}`}>
                      {item.isexpense ? '-' : '+'}Rp.{item.amount}
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-4 sm:px-6 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{item.category}</span>
                  </td>
                  <td className="hidden sm:table-cell px-4 sm:px-6 py-3">
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {item.transaction_date}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3">
                    <div className="flex items-center gap-2">
                      {item.isexpense ? <ArrowDownCircle className="w-4 h-4 text-red-500" /> : <ArrowUpCircle className="w-4 h-4 text-green-500" />}
                      <span className={`text-sm ${item.isexpense ? 'text-red-600' : 'text-green-600'}`}>{item.isexpense ? 'Expense' : 'Income'}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3">
                    <div className="flex justify-center space-x-2">
                      <Link href={`edit/${item._id}`} className="p-1 text-yellow-600 hover:text-yellow-900">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <TransactionDelete transaction_id={`${item._id}`} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
