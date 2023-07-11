import CodeRepo, { ICode } from "@/app/components/CodeRepo";

async function getRepos() {
    const response = await fetch("https://api.github.com/users/heitor931/repos")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const repos = response.json()
    return repos
}

async function Code() {
    const repos = await getRepos()
    
    return (
        <section>
            <h3 className="text-3xl text-blue-50 bg-slate-950 p-3">Code repositories</h3>
            {repos.map((repo:ICode) => <CodeRepo key={repos.id} {...repo} />)}
        </section>
    );
}

export default Code;