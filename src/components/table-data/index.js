import "./index.css"

export const TableData = ({ data }) => {
    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Number</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, i) => (
                    <tr key={i}>
                        <td>{r.Name}</td>
                        <td>{r.Phone}</td>
                        <td>{r.Number}</td>
                        <td>{r.Email}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}