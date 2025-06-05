const Testimonial = () => (
  <section className="bg-white py-12 px-4">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
      <div className="bg-blue-50 rounded-lg p-8 shadow">
        <div className="text-blue-700 text-xl font-semibold mb-4">
          Absolutely no impact on our relationship with AWS
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <img
            src="/testimonials/praveen.png"
            alt="Praveen Garg"
            className="h-12 w-12 rounded-full border-2 border-blue-200"
          />
          <div className="text-left">
            <div className="font-bold text-gray-800">Praveen Garg</div>
            <div className="text-gray-500 text-sm">CTO, upGrad</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
