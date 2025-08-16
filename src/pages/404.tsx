import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout
      seo={{
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist.",
        noIndex: true,
      }}
      showNavbar={false}
      showFooter={false}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4 animate-bounce-subtle">
              404
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary-600 dark:bg-primary-400 rounded-full animate-pulse w-1/3"></div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Actions */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors w-full sm:w-auto"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/projects"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/aboutme"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
