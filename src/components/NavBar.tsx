import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="sticky  h-14 inset-x-0 top-0 w-full  border-gray-200 bg-white/75 dark:bg-black/50 dark:border-black-200 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-black">
          <Link href="/" className="flex z-40 font-semibold">
            Spend<span className=" dark:text-primary text-blue-500">Savvy</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <Link
                href="/api/auth/logout"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign Out
              </Link>
            ) : (
              <Link
                href="/api/auth/login"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Login
              </Link>
            )}
            <MobileNav />
            <ThemeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
