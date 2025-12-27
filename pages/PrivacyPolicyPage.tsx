
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif-brand italic font-bold text-slate-900 mb-12">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Introduction</h2>
            <p>
              1st Mortgage Group is committed to protecting your privacy and handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">What Information We Collect</h2>
            <p>We may collect personal information including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details</li>
              <li>Information relevant to your enquiry</li>
              <li>Information required to provide credit assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">How We Collect Information</h2>
            <p>We collect personal information when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit an enquiry through our website</li>
              <li>Contact us by phone or email</li>
              <li>Engage our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p>Your information may be used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries</li>
              <li>Provide credit assistance services</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Disclosure of Information</h2>
            <p>We may disclose personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lenders and service providers</li>
              <li>Our aggregator and compliance partners</li>
              <li>Regulatory bodies where required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Storage & Security</h2>
            <p>
              We take reasonable steps to protect personal information from misuse, loss, unauthorised access, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Access & Correction</h2>
            <p>
              You may request access to or correction of your personal information by contacting us.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact:</p>
            <p className="font-bold text-gold mt-2">Email: info@1stmg.com.au</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
