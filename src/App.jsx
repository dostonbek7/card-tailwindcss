function App() {
  return (
    <>
      <div className="card-container">
        <section className="w-80 h-[722px] m-auto md:w-[635px] md:h-[475px] md:m-auto py-20 rounded-md shadow-[0_15px_30px_0_rgba(0, 81, 171, 0.15]">
          <div className="bg-[#fff] px-6 py-8 md:w-[635px]">
            <h4 className="text-[#2AB3B1] text-xl mb-6 font-bold">
              Join our community
            </h4>
            <p className="text-[#C0DF33] font-bold text-sm leading-5 mb-4 tracking-[-0.187px]">
              30-day, hassle-free money back guarantee
            </p>
            <small className="text-[#9AA7BE] font-normal leading-7 tracking-[-0.175px]">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </small>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="bg-[#2AB3B1] text-[#fff] p-6 md:p-10">
              <h4 className="text-[#fff] font-bold leading-normal mb-5 tracking-[-0.225px]">
                Monthly Subscription
              </h4>
              <h1 className="text-[#fff] font-bold text-[32px]">
                $29{" "}
                <span className="opacity-50 text-base font-normal leading-7 tracing-[-0.2px] mb-1">
                  per month
                </span>
              </h1>
              <p className="text-[#fff] mb-6 font-normal text-base">
                Full access for less than $1 a day
              </p>
              <button className="w-[263px] text-[#fff] bg-[#C0DF33] rounded-md py-4 px-[102px] md:py-[14px] md:px-[89px] md:h-12 md:w-[237px] shadow-[0_10px_10px_0_rgba(0, 0, 0, 0.10]">
                Sign up
              </button>
            </div>
            <div className="bg-[#88dfde] py-6 pl-6 pr-12 md:p-10">
              <h4 className="text-[#fff] text-lg font-bold mb-5">Why us</h4>
              <p className=" w-[238px] text-[#fff] text-base font-normal leading-5 opacity-75">
                Tutorials by industry experts Peer & expert code review Coding
                exercises Access to our GitHub repos Community forum Flashcard
                decks New videos every week
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
