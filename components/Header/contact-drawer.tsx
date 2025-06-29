"use client";

import { Linkedin, Github, Twitter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";

export function ContactDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="mx-auto max-w-[600px] bg-black">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              <div className="mx-auto flex items-center justify-center gap-5">
                <span>
                  <Linkedin size={18} className="text-white" />
                </span>
                <span>
                  <Github size={18} className="text-white" />
                </span>
                <span>
                  <Twitter size={18} className="text-white" />
                </span>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex justify-center">
            <Tabs defaultValue="quick-connect" className="dark mx-auto">
              <TabsList className="space-x-8 px-4">
                <TabsTrigger value="quick-connect" className="text-xs">
                  Quick connect
                </TabsTrigger>
                <TabsTrigger value="fill-a-form" className="text-xs">
                  Fill a form
                </TabsTrigger>
              </TabsList>
              <TabsContent value="quick-connect">Quick connect</TabsContent>
              <TabsContent value="fill-a-form">Fill a form</TabsContent>
            </Tabs>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
