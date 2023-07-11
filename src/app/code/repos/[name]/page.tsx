import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

export interface IParams {
    params: {
        name: string
    }
}

function RepoName({ params: { name } }: IParams) {
    return (
        <div>
            <Link className="bg-slate-400 p-[4px] m-4 hover:bg-blue-500 hover:text-white rounded-sm" href={"/code/repos"}>back to repositories</Link>
            <Suspense fallback={<p>Loading repo...</p>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<p>Loading repodirs...</p>} >
                <RepoDirs name={name} />
            </Suspense>
        </div>
    );
}

export default RepoName;