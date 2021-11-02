import ajax from '@fdaciuk/ajax'

export const Search = () => (
    <div className='search'>
        <input
            type='search'
            placeholder='digite o nome...'
            onKeyUp={(e) => {
                const value = e.target.value
                const KeyCode = e.which || e.keyCode
                const ENTER = 13
                if (KeyCode === ENTER) {
                    ajax().get(`https://api.github.com/user/${value}`)
                    .then((result) => {
                         console.log(result)
                    })
                }
                console.log(KeyCode)
            }}
        />
    </div>
)
