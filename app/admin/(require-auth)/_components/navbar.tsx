import { SheetMenu } from "./sheet-menu";
import { UserNav } from "./user-nav";
import VisitWebsite from "./visit-website";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary ">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <VisitWebsite />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
