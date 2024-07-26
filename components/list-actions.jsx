"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export const ListActions = ({ item }) => {

    const router = useRouter();


    const handleNavigation = () => {
        navigator.clipboard.writeText(item.enquiryNumber)
    }

    const handleEdit = () => {
        router.push(`enquiry-form/edit/${item.enquiryNumber}`)
    }

    return (
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleNavigation}>
                Copy Enquiry Number
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleEdit}>
                Edit
            </DropdownMenuItem>

          </DropdownMenuContent>

        </DropdownMenu>
    );

}