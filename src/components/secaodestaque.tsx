export default function Secaodestaque() {
  return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center max-w-3xl mx-auto leading-tight">
          Beautiful UI Components for Modern Applications
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg leading-snug max-w-3xl mx-auto">
          Build stunning interfaces with our professionally designed, fully
          customizable UI components. <br />
          Perfect for React, Vue, and Angular projects.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded">
            Browse Components
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  )
}
