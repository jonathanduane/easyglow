import { AlertTriangle, Info } from "lucide-react";

export default function ShippingInfoSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-[#FF4500] rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Important Information on Shipping to the Republic of Ireland
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  We love the open border between Ireland and Northern Ireland. However, Excise and EPA regulations differ between Ireland and Northern Ireland.
                </p>
                <p className="mb-4">
                  Certain conditions must be acknowledged for shipments to the Irish Republic. To process your order, you must confirm at checkout that you will take the required actions when you receive your order.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-amber-800 text-sm">
              <strong>Please note:</strong> By ordering for delivery to the Republic of Ireland, you acknowledge that you understand and will comply with local regulations regarding the receipt and use of solid fuels.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}