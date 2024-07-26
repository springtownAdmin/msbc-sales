"use client"

import { useEffect, useRef } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { MdDashboard, MdOutlineBorderAll } from "react-icons/md";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Menus } from "@/utils/constants";
import { Check } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/lib/store';
import { CustomTooltip } from './custom-tooltip';

const frameworks = [
  {
    value: "form",
    label: "Form",
  },
  {
    value: "table",
    label: "Table",
  }
]

export const Container = ({ children, id = 1 }) => {

  const [ activeId, setActiveId ] = useState(id);
  const router = useRouter();

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleMenu = (data) => {
    router.push(data.link);
  }

  useEffect(() => {

    if (isAuthenticated === false) {
    
      redirect("/auth?tab=login");

    }

  }, [isAuthenticated, router]);

  if (!isAuthenticated) {

    return null;

  }

  return (

    <>
      <div className="w-full h-screen flex">

          <div className="border-r h-full w-[65px]">

            <div className="p-4 flex flex-col gap-4 items-center">

              {Menus.map((v, i) => (
                
                <CustomTooltip key={`MenuItem-${i}`} content={v.name}>
                  <div onClick={() => handleMenu(v)} className={`hover:bg-gray-200 ${activeId === v.id && 'bg-gray-200'} transition-all duration-200 p-2 rounded-md`}>
                    <v.Icon size={25} />
                  </div>
                </CustomTooltip>


              ))}

              {/* <Popover open={open} onOpenChange={setOpen} >

                <PopoverTrigger>
                  <MdDashboard />
                </PopoverTrigger>

                <PopoverContent className="relative left-[60px] top-[-20px] w-[150px] p-0" >

                  <Command>

                    <CommandList>

                      <CommandGroup>

                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              ref={inputRef}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false);
                                console.log(currentValue)
                              }}
                            >
                              <div onClick={handleClick}>
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                  )}
                                />

                                {framework.label}
                              </div>
                            </CommandItem>
                          ))}

                      </CommandGroup>

                    </CommandList>
                    
                  </Command>

                </PopoverContent>

              </Popover> */}

            </div>

          </div>

          <div className='h-full w-full'>

              <div className='w-[10%] p-4'>
                Header
              </div>

              <hr />

              <div className='w-full h-[90%] p-4 overflow-auto'>
                  
                {children}

              </div>

          </div>

      </div>
    </>

  );

}