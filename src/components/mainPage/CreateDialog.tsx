"use client";

import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { genRadRoom } from "@/lib/generation";

const CreateDialog = () => {
  const [roomCode, setRoomCode] = useState("");
  const [file, setFile] = useState<File>();

  useEffect(() => {
    setRoomCode(genRadRoom());
  }, []);
  // TODO: rewrite to use form
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a room</DialogTitle>
          <DialogDescription>
            Create a room to start a new presentation
          </DialogDescription>
        </DialogHeader>
        <Label htmlFor="inputFile">Select pdf to present</Label>
        <Input
          type="file"
          id="inputFile"
          className="file:text-foreground file:border-1 file:border-foreground file:rounded-lg"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <Label htmlFor="link" className="sr-only">
          Link for creating a room
        </Label>
        <Input readOnly defaultValue={roomCode} id="link" />
        <div className="flex gap-5 justify-center items-center">
          <Link
            href={{
              pathname: `/room/${roomCode}`,
              query: {},
            }}
            className="p-3 px-5 bg-blue-800 rounded-md"
          >
            Create
          </Link>
          <DialogTrigger>Cancel</DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
