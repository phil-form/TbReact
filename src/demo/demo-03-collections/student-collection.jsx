const StudentCollection = ({ students }) =>
{
    const studentsJsx = students.map(
        s => <StudentTableRow key={s.id} {...s}/>
    );
    
    return (
        <>
            <h2>Liste des étudiants</h2>
            <table>
                <StudentTableHead/>
                <tbody>
                    {studentsJsx}
                </tbody>
            </table>
        </>
    );
};

const StudentTableHead = () =>
{
    return <thead>
        <tr>
            <th>Nom</th>
            <th>Résultat</th>
        </tr>
    </thead>
};

const StudentTableRow = ({ firstname, lastname, result }) =>
{
    return <tr>
        <td>{firstname} {lastname}</td>
        <td>{result != null ? result : '/'}</td>
    </tr>
}

export default StudentCollection;
