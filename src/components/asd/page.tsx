"use client";
import React from "react";
import { useOthers } from "../../../liveblocks.config";

type Props = {};

const Asd = (props: Props) => {
  const others = useOthers();
  return <div>people : {others.length}</div>;
};

export default Asd;
