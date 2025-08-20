
import Image from "next/image";

import LandingFooter from '@/components/LandingLayout/Footer';
import LandingHeader from '@/components/LandingLayout/Header';
import Link from "next/link";

const page = () => {

  return (
    <>
      <div className="min-h-screen bg-[#0D1B2A]">

        <LandingHeader />
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-[#0D1B2A] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-[#F1F5F9] sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Manage your</span>
                    <span className="block text-[#3A86FF] xl:inline"> tasks efficiently</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Streamline your workflow, collaborate with your team, and get things done faster with our powerful task management platform.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/register"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3A86FF] hover:bg-[#3A86FF]/90 md:py-4 md:text-lg md:px-10 transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="#features"
                        className="w-full flex items-center justify-center px-8 py-3 border border-[#415A77]/20 text-base font-medium rounded-md text-[#F1F5F9] bg-[#1B263B] hover:bg-[#415A77]/20 md:py-4 md:text-lg md:px-10 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-[#3A86FF]/20 to-[#2EC4B6]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-[#1B263B] rounded-2xl border border-[#415A77]/20 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-[#3A86FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 012-2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-[#1B263B] text-[#F1F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center">Key Features</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#3A86FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h18M3 12h18m-7 7h7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-3">Task Management</h3>
                <p className="mt-2 text-gray-300">Create and manage tasks with deadlines, priorities, and progress tracking.</p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#3A86FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v14m7-7H5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-3">Collaboration</h3>
                <p className="mt-2 text-gray-300">Work with teams in real-time, assign tasks, and track team progress.</p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#3A86FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12h4l-8 8-8-8h4l4-4 4 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-3">Notifications</h3>
                <p className="mt-2 text-gray-300">Get notified when tasks are updated or deadlines are approaching.</p>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#3A86FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-3">Integrations</h3>
                <p className="mt-2 text-gray-300">Integrate with other tools like Slack, Google Calendar, and more.</p>
              </div>
            </div>
          </div>
        </section>

        <LandingFooter />
      </div>
    </>
  )
}

export default page
