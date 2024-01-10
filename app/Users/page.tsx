import React from "react";

const Users = () => {
  return (
    <div className="d-flex justify-content-center align-items-center
     mt-40 ">
      <table className="table table-dark table-sm w-50">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Users;
