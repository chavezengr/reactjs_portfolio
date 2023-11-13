import React from "react";
import { useParams } from "react-router-dom";

const ContactInfo = () => {
  const { contactId } = useParams();
  return (
    <>
      <p> Contact Email Form Page {contactId}</p>
    </>
  );
};

export default ContactInfo;
