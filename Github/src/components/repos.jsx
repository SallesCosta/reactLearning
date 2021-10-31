
export const Repos = ({ titulo, repos, className }) => (
    <>
        <div className={className}>
            <h2>{titulo}: </h2>
            <ul>
                {repos.map((i, index) => (
                    <li key={index}>
                        <a href={i.link}>{i.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </>
)