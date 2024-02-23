import React from "react";
import RoomPage from "@/components/RoomPage";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <RoomPage />;
}
