import React from "react";
import Image from "next/image";
import { Bookmark, SquarePen } from "lucide-react";
import SearchForm from "./searchform";

function Header() {
  return (
    <div className="flex items-center py-3 px-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 w-full justify-between">
      <div className="flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          className="rounded-full border-2 border-slate-900 overflow-hidden h-10 w-10"
        />
        <span className="italic text-2xl text-white">Forkify</span>
      </div>

      <div className="w-2/5 ">
        <div className="relative">
          <SearchForm />
        </div>
      </div>
      <div className="flex h-8 justify-between gap-4">
        <ul className="flex items-center text-white">
          <SquarePen className="mr-1" />
          ADD RECIPE
        </ul>
        <ul className="flex items-center text-white">
          <Bookmark className="mr-1" /> BOOKMARKS
        </ul>
      </div>
    </div>
  );
}

export default Header;

// import React from "react";
// import Image from "next/image";
// import { Bookmark, SquarePen } from "lucide-react";
// import SearchForm from "./searchform";

// function Header() {
//   return (
//     <div className="flex items-center py-3 px-4 bg-fuchsia-100 w-full justify-between">
//       <div className="flex gap-2 items-center">
//         <Image
//           src="/images/logo.png"
//           width={100}
//           height={100}
//           className=" rounded-full border-2 border-slate-900 overflow-hidden  h-10 w-10  "
//         />
//         <span className="italic text-2xl">Forkify</span>
//       </div>

//       <div className="w-2/5 ">
//         <div class="relative ">
//           <SearchForm />
//         </div>
//       </div>
//       <div className="flex h-8 justify-between gap-4">
//         <ul className="flex">
//           <SquarePen className="text-red-300" />
//           ADD RECIPE
//         </ul>
//         <ul className="flex">
//           <Bookmark className="text-red-300" /> BOOKMARKS
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Header;
