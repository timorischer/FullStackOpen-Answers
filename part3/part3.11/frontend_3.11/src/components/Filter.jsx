const Filter = ({ filter, handleFilterChange }) => {
    return (
        <>
            <form>
                <div>
                    Filter: <input
                        id="handleFilterChange"
                        value={filter}
                        onChange={handleFilterChange}
                    />
                </div>
            </form>
        </>
    )
}

export default Filter