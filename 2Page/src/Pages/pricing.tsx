export const Pricing = () => {
  return (
    <main>
      <div className=" min-h-[500px] w-full flex flex-col justify-center items-center bg-zinc-100">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 text-center my-10">
            Начните карьеру вместе с Roboticslab school
          </h2>
          <p className="text-2xl font-medium mb-4 text-start px-40 opacity-85">
            Каждый из наших курсов предлагает три способа обучения: мини-курс,
            курс который можно начать автономно и курс с ментором, удовлетворяя
            различные образовательные потребности студентов.
          </p>
          <p className="text-2xl font-medium mb-4 text-start px-40 opacity-85">
            Мини-курс предлагает возможность познакомиться с новой темой через
            пять качественных уроков. Курс который можно начать прямо сейчас
            дает студентам шанс освоить новую профессию в интенсивном формате
            самостоятельного обучения. Курс с ментором предлагает глубокое
            погружение в новую профессию в компании выдающегося сообщества и при
            поддержке ментора, что обеспечивает наиболее обогащенный обучающий
            опыт.
          </p>
        </div>
      </div>
      <div className="pricing-table-2 bg-white py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 md:mb-6">
              Pricing Plans
            </h1>
            <p className="text-gray-500 xl:mx-12">
              You have 3 plans to choose from for using FWR blocks. Basic blocks
              are FREE forever. Other premium blocks are also free. You can use
              it for your personal or commercial projects. Just don't forget to
              share our website or give attribution.
            </p>
          </div>

          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12 gap-20 sm:gap-0">
            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white hover:shadow-lg hover:scale-110 transition-transform text-center max-w-sm mx-auto hover:border-red-600  duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Small Business
                  </h4>
                  <p className="text-gray-600">For small projects</p>
                </div>
                <div className="pricing-amount bg-red-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">$19</span> /year
                  </div>
                </div>
                <div className="p-6">
                  <ul className="leading-loose">
                    <li>Upto 5 uses</li>
                    <li>Max 100 items/month</li>
                    <li>500 queries/month</li>
                    <li>Basic statistics</li>
                    <li>Email Support</li>
                  </ul>
                  <div className="mt-6 py-4">
                    <button className="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white hover:shadow-lg hover:scale-110 transition-transform text-center max-w-sm mx-auto hover:border-red-600  duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Professional
                  </h4>
                  <p className="text-gray-600">For large scale projects</p>
                </div>
                <div className="pricing-amount bg-red-100 p-6 transition-colors duration-300">
                  <div>
                    <span className="text-4xl font-semibold">$29</span> /year
                  </div>
                </div>
                <div className="p-6">
                  <ul className="leading-loose">
                    <li>Upto 50 uses</li>
                    <li>Max 500 items/month</li>
                    <li>1000 queries/month</li>
                    <li>Full statistics</li>
                    <li>Email Support</li>
                  </ul>
                  <div className="mt-6 py-4">
                    <button className="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white hover:shadow-lg hover:scale-110 transition-transform text-center max-w-sm mx-auto hover:border-red-600  duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Power User
                  </h4>
                  <p className="text-gray-600">
                    For multi large scale projects
                  </p>
                </div>
                <div className="pricing-amount bg-red-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">$39</span> /year
                  </div>
                </div>
                <div className="p-6">
                  <ul className="leading-loose">
                    <li>Unlimited uses</li>
                    <li>Unlimited items/month</li>
                    <li>Unlimited queries/month</li>
                    <li>Full statistics</li>
                    <li>Email &amp; Phone Support</li>
                  </ul>
                  <div className="mt-6 py-4">
                    <button className="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
