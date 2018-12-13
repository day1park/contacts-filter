// Table Component goes here
import React from "react";
import Row from "./row";

const Table = ({ contacts }) => {
  // map through all contacts
  const allContacts = contacts.map(contact => {
    return <Row key={contact.id} contact={contact} />;
  });

  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>{allContacts}</tbody>
    </table>
  );
};

export default Table;
