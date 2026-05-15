import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Terms & Conditions
          </h1>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on our
                website for personal, non-commercial transitory viewing only. This is the grant
                of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to decompile or reverse engineer any software contained on our website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not
                warrant that product descriptions or other content on this site is accurate, complete,
                reliable, current, or error-free. If a product offered by us is not as described,
                your sole remedy is to return it in unused condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pricing and Payment</h2>
              <p>
                All prices are subject to change without notice. We reserve the right to refuse or
                cancel any order. Payment must be received prior to shipment of goods. We accept
                major credit cards and PayPal for payment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping and Delivery</h2>
              <p>
                We will make every effort to deliver goods within the estimated timeframe, however,
                delays are occasionally inevitable due to unforeseen factors. We are not liable
                for any delays in delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Returns and Refunds</h2>
              <p>
                We offer a 30-day return policy on most items. Items must be returned in their
                original condition and packaging. Return shipping costs may apply. Refunds will
                be processed within 5-7 business days after receipt of returned items.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate,
                complete, and current at all times. You are responsible for safeguarding the password
                and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall our company or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws
                of our jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the
                courts in that state or location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                If a revision is material, we will try to provide at least 30 days notice prior to any
                new terms taking effect.
              </p>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> January 1, 2024<br />
                If you have any questions about these Terms & Conditions, please contact us at
                <a href="mailto:legal@ecommerce.com" className="text-blue-600 hover:underline ml-1">
                  legal@ecommerce.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;