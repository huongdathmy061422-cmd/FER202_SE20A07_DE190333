import React from "react";

function ListPerson() {

    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }
    ];

    // Sort theo tên
    const sortedPeople = [...people].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    // Sort theo tuổi giảm dần
    const sortedByAgeDesc = [...people].sort((a, b) =>
        b.age - a.age
    );

    const firstTeenager = people.find(
        person => person.age >= 10 && person.age <= 20
    );

    const allTeenagers = people.filter(
        person => person.age >= 10 && person.age <= 20
    );

    const isEveryTeenager = people.every(
        person => person.age >= 10 && person.age <= 20
    );

    const isAnyTeenager = people.some(
        person => person.age >= 10 && person.age <= 20
    );

    return (
        <>
            <h1>1. List of People</h1>

            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.age} tuổi
                    </li>
                ))}
            </ul>

            <h3>2. Find the first teenager</h3>

            <div>
                {firstTeenager ? (
                    <p>
                        {firstTeenager.name} - {firstTeenager.age} tuổi
                    </p>
                ) : (
                    <p>Không tìm thấy ai.</p>
                )}
            </div>

            <h3>3. All teenagers:</h3>

            <ul>
                {allTeenagers.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.age} tuổi
                    </li>
                ))}
            </ul>

            <h3>
                4. Check if every person is teenager
            </h3>

            <p>
                {isEveryTeenager ? "true" : "false"}
            </p>

            <h3>
                5. Is there any teenager?
            </h3>

            <p>
                {isAnyTeenager ? "true" : "false"}
            </p>

            {/* Bảng sort theo tên */}
            <h1>6. List of People (Sorted by Name)</h1>

            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '10px'
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            STT
                        </th>

                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            Name
                        </th>

                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            Age
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {sortedPeople.map((person, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {index + 1}
                            </td>

                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {person.name}
                            </td>

                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {person.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Bảng sort theo tuổi */}
            <h1 style={{ marginTop: '30px' }}>
                7. List of People (Sorted by Age DESC)
            </h1>

            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '10px'
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            STT
                        </th>

                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            Name
                        </th>

                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            Age
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {sortedByAgeDesc.map((person, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {index + 1}
                            </td>

                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {person.name}
                            </td>

                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {person.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListPerson;