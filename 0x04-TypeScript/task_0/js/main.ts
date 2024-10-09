interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

document.body.innerHTML = `
    <table id="studentsTable">
        <caption>Students</caption>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
`;

const style = `
    body {
        display: flex;
        margin: auto;
        justify-content: center;
        padding: 32px;
        color: #1E293B;
    }

    table {
        border-collapse: collapse;
        width: 50%;
    }

    caption {
        margin: 24px;
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
    }

    tr {
        border-bottom: 1px solid #94A3B8;
        font-weight: 500;
    }

    thead {
        background-color: #7C3AED;
    }

    thead > tr th {
        border: none;
        padding: 12px 18px;
    }

    tr:hover,
    tr:hover td {
        border: none;
        background-color: #94A3B8;
        cursor: pointer;
    }

    td {
        padding: 12px 18px;
        border: 1px solid #E2E8F0;
    }

    td:first-child {
        text-align: center;
    }
`;

const studentList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    location: "Los Angeles",
  },
];

const tbody: Element = document.querySelector("#studentsTable tbody");

studentList.map((student) => {
  const row = document.createElement("tr");

  (Object.keys(student) as (keyof Student)[]).filter((key) => {
    if (key === "firstName" || key === "location") {
      const cell = document.createElement("td");
      cell.textContent = student[key].toString();
      row.appendChild(cell);
    }
  });

  tbody.appendChild(row);
});

const styleSheet = document.createElement("style");
styleSheet.innerHTML = style;
document.head.insertAdjacentElement('beforeend', styleSheet);
document.title = "Student List | Task 0"