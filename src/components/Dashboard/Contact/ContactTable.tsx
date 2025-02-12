import { Contact } from "@/types";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ContactTable = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#39B9B7]">
          <TableHead className="text-white font-semibold">User Name</TableHead>
          <TableHead className="text-white font-semibold">User Email</TableHead>
          <TableHead className="text-white font-semibold">Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow
            key={contact._id}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <TableCell className="font-medium text-gray-800 dark:text-gray-100">
              {contact.name}
            </TableCell>
            <TableCell className="text-gray-700 dark:text-gray-200">
              {contact.email}
            </TableCell>
            <TableCell className="text-gray-700 dark:text-gray-200">
              {contact.message}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactTable;
