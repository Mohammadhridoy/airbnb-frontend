

import { Globe } from 'lucide-react';
import {
  Dialog,
//   DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function NavbarTranslator() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer w-10 h-10 rounded-full
         flex justify-center items-center align-middle bg-[#f0f0f0] 
         hover:bg-[#e6e5e5] ease-in-out
         ">
            <Globe className="w-5" />

        </div>
        

      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
           
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
