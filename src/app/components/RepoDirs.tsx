import Link from "next/link";
import { IRepo } from "./Repo";

async function getContents(arg:string) {
    const response = await fetch(`https://api.github.com/repos/heitor931/${arg}/contents`)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const contents = await response.json()
    return contents
}

async function RepoDirs({ name }: IRepo) {
    const contents = await getContents(name)
    const dirs = contents.filter((item:{type:string}) => item.type === "dir")
    
    return (
        <>
        <ul className="flex flex-col gap-1 m-4">
        <h3 className="bg-red-300 w-1/3 p-1 rounded-md">Directories</h3>
                {dirs.map((dir:{path:string}) => (<li className="bg-slate-400 p-1 w-1/3 rounded-md" key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>))}
        </ul>
        </>
    );
}

export default RepoDirs;