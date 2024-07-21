"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky  left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28  max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col fex-1 gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start dark:text-gray-200",
                {
                  "bg-gray-100": isActive,
                  "dark:bg-blue-500": isActive,
                }
              )}
            >
              <Image
                src={link.imageURL}
                alt="link-image"
                width={24}
                height={24}
                className="dark:invert"
              />
              <p
                className="text-lg font-semibold max-lg:hidden'
              "
              >
                {" "}
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
