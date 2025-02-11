import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session} />
      {children}
    </div>
  );
};

export default CommonLayout;
