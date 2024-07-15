import React from 'react';
import { useForm } from 'react-hook-form';

const InvoiceForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Billed To:</label>
        <input {...register("billedTo")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone:</label>
        <input {...register("phone")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Invoice Number:</label>
        <input {...register("invoiceNumber")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <input type="date" {...register("date")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Items:</label>
        <textarea {...register("items")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" placeholder="Description,Amount\nDescription,Amount" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Installments:</label>
        <textarea {...register("installments")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" placeholder="Installment Description,Amount\nInstallment Description,Amount" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Subtotal:</label>
        <input type="number" {...register("subtotal")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Total:</label>
        <input type="number" {...register("total")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Remaining:</label>
        <input type="number" {...register("remaining")} className="mt-1 block w-full border border-gray-300 rounded px-2 py-1" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Invoice
      </button>
    </form>
  );
};

export default InvoiceForm;
