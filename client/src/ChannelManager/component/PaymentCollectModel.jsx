const PaymentCollectModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[500px]">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Add Payment</h2>
            <button className="text-white text-xl" onClick={onClose}>&times;</button>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="border rounded p-2 w-full"
                placeholder="Amount Paid *"
                type="text"
                defaultValue="3,000"
              />
              <input
                className="border rounded p-2 w-full bg-gray-100 text-gray-500"
                placeholder="Outstanding Amount"
                type="text"
                defaultValue="3,360.00"
                readOnly
              />
            </div>
            <div className="mt-4">
              <select className="border rounded p-2 w-full">
                <option value="upi">UPI</option>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="cash">Cash</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <button className="text-gray-700" onClick={onClose}>CLOSE</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              SAVE
            </button>
          </div>
        </div>
      </div>
    );
  };
  export  default PaymentCollectModal