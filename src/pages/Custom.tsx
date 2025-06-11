const Custom = () => {
  return (
    <div>
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Custom Signs</h1>
          <p className="text-xl text-gray-300 mt-4">
            Create your perfect neon statement
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Custom Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content will be added in future iterations */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Custom;
