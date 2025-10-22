"use client";

import React from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be atleast 2 characters long!",
    })
    .max(50),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be atleast 10 digits long!" })
    .max(15, { message: "Phone number cannot be greater than 15 digits!" }),
  location: z
    .string()
    .min(2, { message: "Location must be atleast 2 characters long" }),
  role: z.enum(["admin", "user"]),
});

type Props = {};

const EditUser = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "john.doe",
      email: "john.doe@gmail.com",
      phone: "818 965 2649",
      location: "New York, NY",
      role: "admin",
    },
  });

  return (
    <div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Edit User</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </div>
  );
};

export default EditUser;
