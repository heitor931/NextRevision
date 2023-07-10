import Link from "next/link";

function Header() {
    return (
        <header className="bg-blue-950 h-12 py-8 text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl text-green-700 font-bold" >Heitor company</h1>
        <ul className="flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/about" >About</Link>
          <Link href="about/team"></Link>
        </ul>
      </header>
    );
}

export default Header;