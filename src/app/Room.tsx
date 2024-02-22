"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveObject } from "@liveblocks/client";
import { FILE } from "dns";

export interface RoomProps {
  children: ReactNode;
  roomId: string;
}
export function Room({ roomId, children }: RoomProps) {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
