import { useContext } from "react";
import { AboutLocation } from "../App";

const Astro = () => {
  const { astro } = useContext(AboutLocation)

  return (
    <div className="text-slate-100 bg-sky-700 p-5 rounded-xl flex-1">
      <h4 className="text-lg font-semibold mb-4">Astro</h4>
      <ul className="flex flex-col gap-2">
        <li className="flex justify-between">
          <p><span className="font-semibold text-base">Sunrise</span><br /><span className="text-xs">{astro.sunrise}</span></p>
          <i className="ri-sun-foggy-fill text-2xl"></i>
        </li>
        <li className="flex justify-between ">
          <p><span className="font-semibold text-base">Sunset</span><br /><span className="text-xs">{astro.sunset}</span></p>
          <i className="ri-moon-foggy-fill text-2xl"></i>
        </li>
      </ul>
    </div>
  );
}

export default Astro;