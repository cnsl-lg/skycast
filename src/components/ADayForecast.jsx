const ADayForecast = ({ children }) => {
  return (
    <div className="ADayForecast text-slate-100 bg-sky-700 p-5 rounded-xl">
      <h4 className="text-lg font-semibold mb-4"><i className="ri-time-fill"></i> 24-Hour forecast</h4>
      <ul className="flex overflow-x-scroll gap-x-10 pb-2">
        {children}
      </ul>
    </div>
  );
}

export default ADayForecast;