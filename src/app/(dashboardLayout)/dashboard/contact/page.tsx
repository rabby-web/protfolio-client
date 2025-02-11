import ContactTable from "@/components/Dashboard/Contact/ContactTable";
import { Contact } from "@/types";
import React from "react";

const ContactMessage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/contacts", {
    cache: "no-store",
  });

  const contactsData = await res.json();
  const contacts: Contact[] = contactsData.data;
  //   console.log(contacts);
  return (
    <div>
      {contacts.map((contact: Contact) => (
        <ContactTable contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactMessage;
