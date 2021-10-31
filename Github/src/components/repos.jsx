
export const Repos = ({titulo, link, className}) => (
    <>
        <div className={className}>
            <h2>{titulo}: </h2>
            <ul>
                <li>
                    <a href={link}> Nome do Repositório</a>
                </li>
            </ul>
        </div>
    </>
)