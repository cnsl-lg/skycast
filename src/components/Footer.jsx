const Footer = () => {
  return (
    <footer className="lg:text-slate-100 lg:bg-sky-700 px-5 py-4 rounded-xl mt-5 flex flex-col gap-5 items-center justify-between text-xs lg:flex-row">
      <p className="font-semibold flex items-center">Date provide in part by <a href="https://www.weatherapi.com/" target="_blank"><img src="weatherapi_logo2-removebg-preview.png" alt="weather api logo" className="w-16 ms-2" /></a></p>
      <p>Created by <span className="font-semibold">evanalifian</span></p>
    </footer>
  );
}
 
export default Footer;