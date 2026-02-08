export default function Office() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 `text-[var(--text)]">
          A Calm Space for Healing
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          My Santa Monica office is thoughtfully designed to feel warm, private,
          and welcoming. Whether you're attending in-person sessions or exploring
          hybrid options, you can expect a safe and comfortable environment
          where meaningful healing can begin.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <img
          src="/images/office1.jpg"
          alt="Therapy office interior with sofa and natural light"
          className="w-full h-64 object-cover rounded-xl shadow-lg transition duration-300 hover:scale-105"
        />

        <img
          src="/images/office2.jpg"
          alt="Private counseling room with comfortable seating"
          className="w-full h-64 object-cover rounded-xl shadow-lg transition duration-300 hover:scale-105"
        />

        <img
          src="/images/office3.jpg"
          alt="Welcoming therapy waiting area"
          className="w-full h-64 object-cover rounded-xl shadow-lg transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
