
import { TextAlignJustify } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavbarDropdownMenu() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
      

        <div className="cursor-pointer w-10 h-10 rounded-full
         flex justify-center items-center align-middle bg-[#f0f0f0] 
         hover:bg-[#e6e5e5] ease-in-out
         ">
              <TextAlignJustify className="w-4" />

        </div>


      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72  p-2 mt-4  " align="end">

        <DropdownMenuGroup className=" ">
          <DropdownMenuItem className="text-[16px] my-2">
            Help Center
         
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className=" py-2">
          <DropdownMenuItem   className="  ">
           <div  >  <div className="text-[16px] font-bold text-gray-600">  Become a host </div> 
           <div className="text-xs text-gray-500"> It's easy to start hosting and earn extra income</div> </div>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>


        <DropdownMenuSeparator />

        <DropdownMenuItem  className="p-2 text-[16px] ">Find a co-host</DropdownMenuItem>
        <DropdownMenuItem className="p-2 text-[16px]">Gift Cards</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-2 text-[16px] ">
          Log out or sign Up
          
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
