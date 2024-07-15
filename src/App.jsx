import React, { useState } from 'react';
import InvoiceForm from './components/InvoiceForm';
import { InvoicePreview, DownloadInvoice } from './components/Invoice';

function App() {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleFormSubmit = (data) => {
    const items = data.items.split('\n').map(item => {
      const [description, amount] = item.split(',');
      return { description, amount };
    });

    const installments = data.installments.split('\n').map(item => {
      const [description, amount] = item.split(',');
      return { description, amount };
    });

    setInvoiceData({
      ...data,
      items,
      installments,
      companyName: "SkyMentor Technology & Services Pvt. Ltd.",
      companyAddress: "3rd Floor, Magh Apartment, Swalambi Nagar Near Padole Hospital, Padole Square, 440022",
      companyPhone: "+91 72409 97691",
      companyWebsite: "www.skymentor.in",
      supportEmail: "support@skymentor.in",
      supportPhone: "+91 88066 77177",
      managerName: "Chetna Bopche",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8">Invoice Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InvoiceForm onSubmit={handleFormSubmit} />
        {invoiceData && (
          <div>
            <InvoicePreview data={invoiceData} />
            <div className="mt-4">
              <DownloadInvoice data={invoiceData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
