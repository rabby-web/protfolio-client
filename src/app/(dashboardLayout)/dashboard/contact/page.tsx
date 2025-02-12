import ContactTable from "@/components/Dashboard/Contact/ContactTable";
import { Contact } from "@/types";
import React from "react";

const ContactMessage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/contacts", {
    cache: "no-store",
  });

  const contactsData = await res.json();
  const contacts: Contact[] = contactsData.data;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Contact Details
      </h2>
      <ContactTable contacts={contacts} />
    </div>
  );
};

export default ContactMessage;
