// Row Component goes here
import React from "react";

const Row = ({ contact }) => {
  const { firstName, lastName, email, profile } = contact;
  const { company, address } = profile;

  const fullName = `${firstName} ${lastName}`;

  let state;
  if (address && address.state) {
    state = address.state;
  } else {
    state = " ";
  }

  return (
    <tr>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{company}</td>
      <td>{state}</td>
    </tr>
  );
};

export default Row;
