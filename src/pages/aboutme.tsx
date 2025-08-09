import Layout from "@/components/layout/Layout";  

export default function AboutMe() {
  return (
    <Layout
      seo={{
        title: "About Me",
        description: "Learn more about my background, skills, and experience as a UX/UI Designer",
      }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate UX/UI Designer who loves creating digital solutions
              that make a difference.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
