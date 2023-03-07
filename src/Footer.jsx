const Footer = () => {
    return ( 
        <>
        <section className="py-20 bg-slate-500">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-start justify-between -mx-4">
      <div className="w-full xl:w-1/6 px-4 mb-16 xl:mb-0">
        <a className="inline-block mb-24" href="#">
          <img src="https://static.shuffle.dev/uploads/files/29/29a86e1adc9554a2ad363814e79d813dcb63f444/NEWPLUG-MINI.webp" alt=""/>
        </a>

        <a className="inline-block font-heading hover:text-black mr-8" href="#">Terms</a><a className="inline-block font-heading hover:text-black" href="#">Privacy</a>
      </div>
      <div className="w-1/2 xl:w-auto px-4 mb-16 xl:mb-0">
        <ul>
          <li className="mb-6"><a className="font-heading hover:text-black" href="#">About us</a></li>
          <li className="mb-6"><a className="font-heading hover:text-black" href="#">Careers</a></li>
          <li className="mb-6"><a className="font-heading hover:text-black" href="#">Press</a></li>
          <li className="mb-6"><a className="font-heading hover:text-black" href="#">Service</a></li>
          <li><a className="font-heading hover:text-black" href="#">Blog</a></li>
        </ul>
      </div>
      <div className="w-full xl:w-auto px-4">
        <div className="max-w-md">
          <h5 className="max-w-sm font-heading text-lg mb-6">Expand your brand with this excellent extension tool</h5>
          <div>
            <form className="mb-4" action="">
              <div className="md:flex">
                <input className="block flex-grow-1 w-full p-4 mb-4 md:mb-0 sm:mr-4 font-heading text-gray-500 bg-gray-50 outline-none rounded-sm" type="email" placeholder="Type your e-mail"/>
                <button className="inline-block flex-shrink-0 w-full md:w-auto py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" type="submit">Sign up</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>
     );
}
 
export default Footer;