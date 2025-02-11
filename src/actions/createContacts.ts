// "use server";

// import { redirect } from "next/navigation";

// export const createContacts = async (data: FormData) => {
//   const contactData = Object.fromEntries(data.entries());

//   const res = await fetch("http://localhost:5000/api/v1/contacts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(contactData),
//   });

//   const contactInfo = await res.json();

//   if (contactInfo) {
//     redirect(`/contacts/${contactInfo._id}`);
//   }

//   return contactInfo;
// };
"use server";

// import { redirect } from "next/navigation";

export const createContacts = async (data: FormData) => {
  const contactData = Object.fromEntries(data.entries());

  const res = await fetch("http://localhost:5000/api/v1/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const contactInfo = await res.json();

  // if (contactInfo) {
  //   redirect(`/contacts/${contactInfo._id}`);
  // }

  return contactInfo;
};
