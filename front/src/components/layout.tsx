import {Outlet} from "react-router-dom";
import progateLogo from "@/assets/progate_logo.svg";
import helpfeelLogo from "@/assets/helpfeel_logo.svg";
import {ImCross} from "react-icons/im";

export function Layout(): JSX.Element {
  return (
    <div>
      <header className="flex h-8 m-4 items-center">
        <img src={progateLogo} alt="progate logo" className="h-full" />
        <ImCross className="h-3 mx-2" />
        <img src={helpfeelLogo} alt="helpfeel logo" className="h-full" />
      </header>
      <main className="bg-[#F9FBFE] h-[calc(100vh-8rem)] py-8 md:py-14 px-4 flex justify-center">
        <div className="w-full md:max-w-[760px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
