import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./mobile-sidebar";

const navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      {/* user button */}
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default navbar;
