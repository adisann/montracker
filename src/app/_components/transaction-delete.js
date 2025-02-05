'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useActionState } from 'react';
import { TransactionDeleteAction } from '@/app/_actions/transaction-delete';

export const TransactionDelete =  ({transaction_id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [ state,formAction, pending] = useActionState(TransactionDeleteAction,null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal} className="p-1 text-red-600 hover:text-red-900">
        <Trash2 className="w-4 h-4" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this item?</p>

            <form action={formAction}>
              <input type="hidden" name="transaction_id" value={transaction_id} />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
                  disabled={pending}
                >
                  {pending ? "Deleting..." : "Delete"}
                </button>
              </div>
              {state?.error && (
                <p className="text-sm text-red-600 mt-2">
                  {state?.error.message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
