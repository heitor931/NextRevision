import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

export interface ICode {
    name: string
    description: string
    id: string
    stargazers_count: string
    forks_count: string
    watchers_count: string
}


function CodeRepo({ name, description, id, stargazers_count, forks_count, watchers_count }: ICode) {
    return (
        <div >
            <Link className="p-3 w-1/2 m-4 rounded-md hover:scale-[1.02] bg-slate-800 hover:ease-out border flex flex-col flex-1" href={`/code/repos/${name}`}>
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
            </Link>
        </div>
    );
}

export default CodeRepo;