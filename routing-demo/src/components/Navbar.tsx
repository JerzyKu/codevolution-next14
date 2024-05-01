import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-950 text-white h-16 flex items-center">
      <Link href={"/"} className="ml-4 mr-auto flex">
        {/* <div className="w-10 h-10 border-teal-300 rounded-full border-8"></div>
        <div className="w-2 h-10 bg-teal-300 ml-1"></div>
        <div className="relative w-10 h-10 bg-teal-300 after:content-[''] ml-1 after:absolute after:top-0 after:left-1/2 after:w-2/3 after:h-full after:bg-black"></div> */}
        <span className="text-teal-300 font-bold text-2xl">XLO</span>{" "}
      </Link>

      <p className="ml-4">Wiadomości</p>
      <p className="ml-4">{`<3`}</p>
      <p className="ml-4">Twoje konto</p>
      <p className="ml-4 mr-4 text-emerald-950 bg-white rounded-lg py-2 px-4">
        Dodaj ogłoszenie
      </p>
    </nav>
  );
}
