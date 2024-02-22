import React from "react";
import { Room } from "@/app/Room";
import RoomPage from "@/components/RoomPage";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <Room roomId={params.slug}>
      <RoomPage />
    </Room>
  );
}
