import ajax from '@fdaciuk/ajax'

export const Search = () => (
    <div className='search'>
        <input
            type='search'
            placeholder='digite o nome...'
            onKeyUp={(e) => {
                const KeyCode = e.which || e.keyCode
                console.log(KeyCode)
            }}
        />
    </div>
)
