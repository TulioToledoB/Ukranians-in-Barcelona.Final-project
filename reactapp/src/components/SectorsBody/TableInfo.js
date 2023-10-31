import React from "react";
function Table(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Link</th>
          <th>Area</th>
        </tr>
        {props.items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.contacts} </td>
            <td>{item.link} </td>
            <td>{item.area_id} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
