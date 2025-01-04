"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SetStateAction, Dispatch, useState } from "react";

import { CreateIndividualProfileSchema } from "./IndividualOnboardingFormSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectComponent from "@/components/SelectComponent";
import { Heirarchy } from "@/types/general";
import {
  leaderShipLevelSelectComponentPayload,
  lifeClassTopicsSelectComponentPayload,
} from "@/utils";

interface IndividualOnboardingFormProps {
  isMutatingDbResourceHandler: Dispatch<SetStateAction<boolean>>;
  isMutatingDbResource: boolean;
  updateIndividualDataHandler: Dispatch<
    SetStateAction<z.infer<typeof CreateIndividualProfileSchema> | null>
  >;
}

export function IndividualOnboardingForm({
  isMutatingDbResource,
  isMutatingDbResourceHandler,
  updateIndividualDataHandler,
}: IndividualOnboardingFormProps) {
  const form = useForm<z.infer<typeof CreateIndividualProfileSchema>>({
    resolver: zodResolver(CreateIndividualProfileSchema),
    defaultValues: {
      // email: "",
    },
  });

  const [leadershipLevel, setLeadershipLevel] = useState<string>(
    Heirarchy.MEMBER
  );

  const [lifeclass_topic, setLifeClassTopic] = useState<string>("1");

  const onSubmit = async (data: any) => {
    console.log(
      "here are the values of indinvidualProfile onboarding form ",
      data
    );
    updateIndividualDataHandler({
      //  the fields that have a "none" value will be updated later when the profile is updated
      ...data,
      leadership_level: leadershipLevel,
      lifeclass_topic: Number(lifeclass_topic),
      lifeclass_teacher_profile_id: "none",
      mentor_profile_id: "none",
      installation_id: "none",
      departments: ["none"],
      centrals: ["none"],
    });
    isMutatingDbResourceHandler(true);
  };

  return (
    <div
      className={`${isMutatingDbResource && "pointer-events-none opacity-70"}`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Name </FormLabel>
                  <FormControl>
                    <Input placeholder="enter your name here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Surname </FormLabel>
                  <FormControl>
                    <Input placeholder="enter your surname here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Email </FormLabel>
                  <FormControl>
                    <Input placeholder="enter your email here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="phone_contact"
            render={({ field }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Phone </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your phone number here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="giving_number"
            render={({ field }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Giving Number </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your giving number here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* ADD LEADERSHIP LEVEL DROPDOWN HERE */}
          {/* select leadership level */}
          <div className="my-4">
            <div className="text-sm">Leadership Level</div>
            <SelectComponent
              placeholder={"Select leadership level"}
              label="Leadership level"
              onValueChange={setLeadershipLevel}
              itemsToSelect={leaderShipLevelSelectComponentPayload}
            />
          </div>

          {/* select life class topic  */}
          <div className="my-4">
            <div className="text-sm">Life class topic</div>
            <SelectComponent
              placeholder={"Select Lifeclass topic"}
              label="Life class topics"
              onValueChange={setLifeClassTopic}
              itemsToSelect={lifeClassTopicsSelectComponentPayload}
              
            />
          </div>


          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Birthday </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g 04-12 in dd-mm format" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name={"passport"}
            render={({ field: { value, onChange, ...fieldProps } }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Passport</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      type="file"
                      {...fieldProps}
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={(event) => {
                        const file = event.target.files?.[0]; // get first file
                        onChange(file);
                        console.log(value)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name={"signature"}
            render={({ field: { value, onChange, ...fieldProps } }) => {
              return (
                <FormItem className="mb-2">
                  <FormLabel>Signature</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      type="file"
                      {...fieldProps}
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={(event) => {
                        const file = event.target.files?.[0]; // get first file
                        onChange(file);
                        console.log(value)

                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button
            type="submit"
            variant={"default"}
            className={`${
              isMutatingDbResource && "pointer-events-none opacity-70"
            } mt-2 bg-primarycol text-white w-full `}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}