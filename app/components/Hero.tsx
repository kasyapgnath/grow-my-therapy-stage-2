export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6"
      
      style={{ backgroundColor: "var(--secondary)" }}
    >
       <div className="max-w-3xl text-center">
        <h1 className="text-5xl mb-6 text-(--text)]">
          Compassionate Anxiety & Trauma Therapy in Santa Monica, CA
        </h1>  

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Dr. Maya Reynolds helps adults work through anxiety, trauma, burnout,
          and perfectionism in a calm, supportive, and non-judgmental space.
        </p>

        <button
          className="px-8 py-3 rounded-lg text-white font-medium transition duration-300 hover:shadow-lg"
          style={{ backgroundColor: "var(--primary)" }}
        >
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  );
}
