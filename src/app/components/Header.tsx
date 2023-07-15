import Link from "next/link";

function Header() {
    return (
        <header className="bg-blue-950  text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl text-green-700 font-bold" >Heitor company</h1>
        <ul className="flex gap-4 p-4 ">
          <Link className="hover:bg-slate-600 p-1 hover:rounded-md" href="/">Home</Link>
          <Link className="hover:bg-slate-600 p-1 hover:rounded-md " href="/about" >About</Link>
          <Link className="hover:bg-slate-600 p-1 hover:rounded-md" href="/about/team">Our team</Link>
          <Link className="hover:bg-slate-600 p-1 hover:rounded-md" href="/code/repos">Code repos</Link>
          <Link className="hover:bg-slate-600 p-1 hover:rounded-md" href="/tailwind">Tailwind</Link>
        </ul>
      </header>
    );
}

export default Header;