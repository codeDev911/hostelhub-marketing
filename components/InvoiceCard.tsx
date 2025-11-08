// components/InvoiceCard.tsx
"use client";

import Image from "next/image";

interface InvoiceCardProps {
  invoice: any;
}



export default function InvoiceCard({ invoice }: InvoiceCardProps) {
  const invoiceDate = new Date(invoice.createdAt);
  const monthName = invoiceDate.toLocaleString("en-US", { month: "long" });
    
  return (
    <div className="bg-primary-foreground  w-full mx-auto  rounded-lg  p-2 text-sm text-primary">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png" // ✅ change path if needed
            alt="HostelHub Logo"
            width={50}
            height={50}
            className="rounded-md object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">HostelHub</h1>
            <p className="text-xs text-gray-500">Invoice</p>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="text-right">
          <p className="text-sm font-semibold">
            Invoice #: <span className="font-normal">{invoice.invoiceNumber}</span>
          </p>
          <p>Date: <span className="font-medium">{invoiceDate.toLocaleDateString("en-PK")}</span></p>
          <p>Due: <span className="font-medium">{new Date(invoice.dueDate).toLocaleDateString("en-PK")}</span></p>
        </div>
      </div>

      {/* Bill To / From */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-6">
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Bill To:</h2>
          <p><strong>{invoice.student.firstName} {invoice.student.lastName}</strong></p>
          <p>{invoice?.student?.email}</p>
          <p>{invoice?.student?.phone}</p> 
          <p>{invoice?.student?.address}</p> 
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Bill From:</h2>
          <p><strong>{invoice.hostel.name}</strong></p>
          <p>{invoice.hostel.address}</p>
          <p>{invoice.hostel.phone}</p>
          <p>{invoice.hostel.email}</p>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3 font-semibold">Description</th>
            <th className="p-3 font-semibold text-right">Amount (PKR)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">Monthly Hostel Rent ({monthName})</td>
            <td className="p-3 text-right font-medium">
              Rs {invoice.amount.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Total */}
      <div className="flex justify-between font-bold text-lg mt-4 pb-4 border-b">
        <span>Total Amount Due:</span>
        <span>Rs {invoice.amount.toLocaleString()}</span>
      </div>

      {/* Payment Status */}
      <div className="mt-4">
        <p><strong>Status:</strong> {invoice.status.toUpperCase()}</p>
        {invoice?.payments?.[0] && <p>{invoice.status.toUpperCase()}: Rs {invoice?.payments?.[0]?.amount?.toLocaleString() ?? "0"} via {invoice.payments?.[0]?.paymentMethod?.toUpperCase()}
            <span className="block">Receipt : {invoice.payments?.[0].receiptNumber}</span></p>}

        {invoice.status === "paid" && (
          <p>Paid Date: {new Date().toLocaleDateString("en-PK")}</p>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-gray-600">
        <p className="font-medium">Thank you for your business!</p>
        <p className="text-xs text-gray-400">hostelhub.pk</p>
      </div>
    </div>
  );
}


 