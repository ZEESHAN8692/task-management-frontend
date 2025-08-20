import Link from 'next/link'
import React from 'react'

const LandingFooter = () => {
  return (
    <>
          {/* Footer */}
      <footer className="bg-[#1B263B] py-8">
        <div className="max-w-7xl mx-auto text-center text-[#F1F5F9]">
          <p>&copy; 2025 TaskHub, Inc. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="#" className="hover:text-[#3A86FF]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#3A86FF]">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#3A86FF]">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LandingFooter