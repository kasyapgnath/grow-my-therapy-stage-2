export default function Services() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
          Areas of Focus
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Personalized, evidence-based therapy designed to help you feel more
          grounded, resilient, and emotionally balanced.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        
        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md 
                        transition duration-300 transform 
                        hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Anxiety Therapy
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Support for managing chronic worry, panic, and overwhelming thoughts
            using evidence-based approaches tailored to your individual needs.
          </p>
        </div>

       
        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md 
                        transition duration-300 transform 
                        hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Trauma & PTSD Support
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Gentle, trauma-informed therapy to help process past experiences,
            rebuild trust, and restore a lasting sense of safety and control.
          </p>
        </div>

       
        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md 
                        transition duration-300 transform 
                        hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Burnout & Perfectionism
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Helping high-achieving adults break cycles of exhaustion,
            self-criticism, and emotional burnout while building sustainable
            balance.
          </p>
        </div>

      </div>
    </section>
  );
}
