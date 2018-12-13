// Table Component goes here
import React from "react";
import Row from "./row";

const Table = ({ contacts, nameFilter }) => {
  // map through all contacts
  const allContacts = contacts

    .filter(contact => {
      const { firstName, lastName } = contact;
      const fullName = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`;
      if (fullName.includes(nameFilter.toLowerCase())) {
        return fullName.indexOf(nameFilter.toLowerCase()) !== -1;
      }
    })
    .map(contact => {
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
