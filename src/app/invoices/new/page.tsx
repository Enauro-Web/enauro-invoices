"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import Link from "next/link";
import React, { SyntheticEvent, useState, startTransition } from "react";
// import {sql} from 'drizzle-orm'
// import {db} from '@/db'
import { createAction } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";

export default function NewInvoice() {
  const [state, setState] = useState("ready");

  const handleSubmit = async (e: SyntheticEvent) => {
    if (state === "pending") {
      e.preventDefault();
      return;
    }
    setState("pending");
    const target = e.target as HTMLFormElement;

    startTransition(async () => {
      const formData = new FormData(target);
      await createAction(formData);
    });
  };

  return (
    <main className="flex flex-col justify-center text-center h-full max-w-5xl mx-auto gap-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form
        // action={createAction}
        className="grid gap-4 max-w-xs"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <Label className="block font-semibold text-sm mb-2" htmlFor="name">
            Billing Name
          </Label>
          <Input name="name" id="name" type="text" />
        </div>
        <div>
          <Label className="block font-semibold text-sm mb-2" htmlFor="email">
            Billing Email
          </Label>
          <Input name="email" id="email" type="email" />
        </div>
        <div>
          <Label className="block font-semibold text-sm mb-2" htmlFor="value">
            Value
          </Label>
          <Input name="value" id="value" type="text" />
        </div>
        <div>
          <Label
            className="block font-semibold text-sm mb-2"
            htmlFor="description"
          >
            Description
          </Label>
          <Textarea name="description" id="description" />
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </main>
  );
}
