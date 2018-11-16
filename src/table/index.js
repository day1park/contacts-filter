// Table Component goes here
import React from "react";
import Row from "./row";

const Table = ({ contacts }) => {
  const allContacts = contacts.map(contact => {
    return <Row key={contact.id} contact={contact} />;
  });
  return (
    <table className="Table">
      <thead />

      <tbody>{allContacts}</tbody>
    </table>
  );
};

export default Table;
