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

const ContactTable = ({ contact }: { contact: Contact }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Contact Details
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-800">
            <TableHead className="text-gray-600 dark:text-gray-300 font-medium">
              User Name
            </TableHead>
            <TableHead className="text-gray-600 dark:text-gray-300 font-medium">
              User Email
            </TableHead>
            <TableHead className="text-gray-600 dark:text-gray-300 font-medium">
              Message
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
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
        </TableBody>
      </Table>
    </div>
  );
};

export default ContactTable;
