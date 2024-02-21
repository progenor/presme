"use client";

import Image from "next/image";
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

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen p-24 bg-background">
      <div className="flex-col flex gap-16">
        <h1 className="text-3xl text-primary font-bold">
          Welcome! join or create a Room!
        </h1>
        <p className="text-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          mollitia expedita soluta.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <JoinDialog />
          <CreateDialog />
        </div>
      </div>
    </main>
  );
}

const JoinDialog = () => {
  const [roomCode, setRoomCode] = useState("");
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Join</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join a room</DialogTitle>
          <DialogDescription>
            Join a room to start watching a presentation
          </DialogDescription>
        </DialogHeader>
        <div>
          {/* TODO: use form insted with zod */}
          <Input
            placeholder="Enter room code"
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
        <div className="flex gap-5 justify-center items-center">
          <Link href="/room" className="p-3 px-5 bg-blue-800 rounded-md">
            Join
          </Link>
          <DialogTrigger>Cancel</DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CreateDialog = () => {
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    setRoomCode(genRadRoom());
  }, []);
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
        <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <Input readOnly defaultValue={roomCode} id="link" />
        <div className="flex gap-5 justify-center items-center">
          <Link href="/room" className="p-3 px-5 bg-blue-800 rounded-md">
            Create
          </Link>
          <DialogTrigger>Cancel</DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};
