const Filter = (props) => {
    return (
        <>
            <form>
                <div>
                    Filter: <input
                        id="handleFilterChange"
                        value={props.filter}
                        onChange={props.handleFilterChange}
                    />
                </div>
            </form>
        </>
    )
}

export default Filter