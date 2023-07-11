import Link from "next/link"
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa"

export interface IRepo {
    name: string
}

async function getRepo(arg:string) {
    const response = await fetch(`https://api.github.com/repos/heitor931/${arg}`)
    const repo  = await response.json()
    return repo
}

async function Repo({ name }: IRepo) {
    const {description, stargazers_count, forks_count, watchers_count} = await getRepo(name)
    return (
        <div>
          
            <div className="p-3 w-1/2 m-4 rounded-md hover:scale-[1.02] bg-slate-800 hover:ease-out border flex flex-col flex-1">
                <h3 className="text-white">{name}</h3>
                <p className="text-red-700">{description}</p>
                <div className="flex gap-8">
                    <span className="text-white">
                        <FaStar /> {stargazers_count}
                    </span>
                    <span className="text-white">
                        <FaCodeBranch /> {forks_count}
                    </span>
                    <span className="text-white">
                        <FaEye /> {watchers_count}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Repo;