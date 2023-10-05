const MoreInfo = ({ weatherCurrent }) => {
  return (
    <div className="text-slate-100 bg-sky-700 p-5 rounded-xl flex-1">
      <h4 className="text-lg font-semibold mb-4">More Info</h4>
      <ul className="flex flex-col gap-2 text-xs">
        <li className="flex justify-between">Humidity <span className="font-semibold">{weatherCurrent.humidity}</span></li>
        <li className="flex justify-between">Real feel <span className="font-semibold">{weatherCurrent.feelslike_c}</span></li>
        <li className="flex justify-between">UV <span className="font-semibold">{weatherCurrent.uv}</span></li>
        <li className="flex justify-between">UV <span className="font-semibold">{weatherCurrent.uv}</span></li>
        <li className="flex justify-between">Pressure <span className="font-semibold">{Math.round(weatherCurrent.pressure_mb)} mbar</span></li>
        <li className="flex justify-between">Cloud <span className="font-semibold">{weatherCurrent.cloud}%</span></li>
      </ul>
    </div>
  );
}

export default MoreInfo;