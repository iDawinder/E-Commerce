import React from 'react'

const ContactUs = () => {
  return (
   <>
   
   <div className="tw-min-h-[calc(100vh-160px)] tw-bg-white tw-p-8">
  {/* Main Container */}
  <div className="tw-max-w-6xl tw-mx-auto">
    {/* Header Section */}
    <div className="tw-text-center tw-mb-12">
      <h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-text-red-500">
        Contact Us
      </h1>
      <p className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto font-bold">
        Have questions or need assistance? Our team is here to help! Reach out
        to us through the form below or use our direct contact information. We
        promise a quick response!
      </p>
    </div>
    {/* Contact Content */}
    <div className="tw-grid tw-gap-8 md:tw-grid-cols-2">
      {/* Contact Form */}
      <div className="tw-space-y-6">
        <div>
          <label className="tw-block tw-text-gray-700 tw-mb-2">Your Name</label>
          <input
            type="text"
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-border-transparent"
          />
        </div>
        <div>
          <label className="tw-block tw-text-gray-700 tw-mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-border-transparent"
          />
        </div>
        <div>
          <label className="tw-block tw-text-gray-700 tw-mb-2">Message</label>
          <textarea
            rows={5}
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-border-transparent"
            defaultValue={""}
          />
        </div>
        <button className="tw-w-full tw-bg-red-500 tw-text-white tw-py-3 tw-px-6 tw-rounded-lg hover:tw-bg-red-600 tw-transition-colors">
          Send Message
        </button>
      </div>
      {/* Contact Info */}
      <div className="tw-space-y-8 tw-bg-gray-50 tw-p-8 tw-rounded-xl">
        <div>
          <h3 className="tw-text-xl tw-font-semibold tw-mb-4 tw-text-red-500">
            Quick Support
          </h3>
          <p className="tw-text-gray-600">
            Our customer support team typically responds within 1 business day.
            For urgent inquiries, please call our hotline.
          </p>
        </div>
        <div className="tw-space-y-4">
          <div className="tw-flex tw-items-center tw-gap-4">
            <div className="tw-bg-red-100 tw-p-3 tw-rounded-full">
              <svg
                className="tw-w-6 tw-h-6 tw-text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="tw-font-medium">Customer Support</p>
              <p className="tw-text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-gap-4">
            <div className="tw-bg-red-100 tw-p-3 tw-rounded-full">
              <svg
                className="tw-w-6 tw-h-6 tw-text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="tw-font-medium">Email Address</p>
              <p className="tw-text-gray-600">support@quickcart.com</p>
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-gap-4">
            <div className="tw-bg-red-100 tw-p-3 tw-rounded-full">
              <svg
                className="tw-w-6 tw-h-6 tw-text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="tw-font-medium">Head Office</p>
              <p className="tw-text-gray-600">
                123 Commerce Street, Suite 456
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
   
   
   
   </>
  )
}

export default ContactUs