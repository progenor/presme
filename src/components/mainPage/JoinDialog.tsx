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
import { useState } from "react";

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
          <Link
            href={`/room/${roomCode}`}
            className="p-3 px-5 bg-blue-800 rounded-md"
          >
            Join
          </Link>
          <DialogTrigger>Cancel</DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinDialog;
