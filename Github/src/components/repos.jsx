import React from "react"

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

Repos.defaultProps = {
    className: '',
}
// // aula 48
// Repos.propTypes = {
//     className: React.PropTypes.string,
//     titulo: React.PropTypes.string.isRequired,
//     repos: React.PropTypes.array,
// }