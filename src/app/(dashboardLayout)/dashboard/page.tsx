import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10">
      {session?.user && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-[#39B9B7] mb-4">
                  Welcome, {session.user.name}!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  You are logged in with the email:{" "}
                  <span className="font-semibold text-[#39B9B7]">
                    {session.user.email}
                  </span>
                </p>
                <div className="flex justify-center">
                  <Image
                    src={
                      session.user.image ||
                      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    }
                    width={120}
                    height={120}
                    alt="User Image"
                    className="rounded-full border-4 border-[#39B9B7] shadow-lg"
                  />
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-[#39B9B7] mb-4">
                  Your Dashboard
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-600">
                    <h3 className="text-lg font-medium text-[#39B9B7]">
                      Profile
                    </h3>
                    <p className="mt-2 text-gray-300">
                      View and edit your profile information.
                    </p>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-600">
                    <h3 className="text-lg font-medium text-[#39B9B7]">
                      Settings
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Manage your account settings.
                    </p>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-600">
                    <h3 className="text-lg font-medium text-[#39B9B7]">
                      Notifications
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Check your latest notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
