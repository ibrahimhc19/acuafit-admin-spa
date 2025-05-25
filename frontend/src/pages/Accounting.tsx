import Datatable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useEffect, useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
Datatable.use(DT);

type IUser = {
  name: string;
  email: string;
  gender: string;
  status: string;
}

export default function AccountingPage() {
  const [tableData, setTableData] = useState<string[][]>([]);

  const getData = () => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((resp) => resp.json())
      .then((data: IUser[]) =>
        setTableData(
          data.map((user) => [user.name, user.email, user.gender, user.status])
        )
      );
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  const options = {
    pageLength: 5,
    lengthMenu: [
      [5, 10, 20, 50],
      [5, 10, 20, 50],
    ],
  };

  return (
    <div>
      <Datatable data={tableData} className="display" options={options}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Género</th>
            <th>Estado</th>
          </tr>
        </thead>
      </Datatable>
    </div>
  );
}
