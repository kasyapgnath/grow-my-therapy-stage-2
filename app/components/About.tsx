export default function About() {
  return (
    <section className="py-18 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        
        <img
          src="/images/maya.jpg"
          alt="Dr. Maya Reynolds, Licensed Psychologist in Santa Monica, CA"
          className="mx-auto mb-7 w-44 h-44 rounded-full object-cover shadow-md"
        />

        <h2 className="text-5xl font-semibold mb-5 `text-[var(--text)]">
          Meet Dr. Maya Reynolds
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dr. Maya Reynolds is a licensed psychologist in Santa Monica, CA,
          specializing in anxiety, trauma, burnout, and perfectionism.
          She works with adults who feel overwhelmed or emotionally exhausted,
          offering a compassionate and collaborative therapy approach tailored
          to each client’s unique goals.
        </p>
      </div>
    </section>
  );
}
