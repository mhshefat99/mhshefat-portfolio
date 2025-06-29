"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Command } from "lucide-react";

export default function NavigationDialog() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Command size={18} />
      </DialogTrigger>
      <DialogContent className="dark max-h-[90vh] overflow-y-auto">
        <DialogTitle></DialogTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        placeat blanditiis quae excepturi reprehenderit temporibus debitis
        doloremque? Inventore ducimus impedit distinctio quod tempora veniam
        error minus nisi eum autem dicta earum, repellendus odio itaque at
        optio! Voluptates molestiae dignissimos, blanditiis error aut dolorum
        dicta at culpa labore, aspernatur a ipsum neque saepe harum ipsam sunt
        rerum debitis omnis tenetur! Minus perspiciatis distinctio voluptas
        tenetur dolore hic laborum laboriosam doloremque. Exercitationem unde
        facere doloribus ullam optio et ex quasi quae eaque laborum ipsam
        perspiciatis quam tempora, quia itaque ab aperiam, labore assumenda hic.
        Quo dolor ipsum sequi sint libero placeat debitis?
      </DialogContent>
    </Dialog>
  );
}
