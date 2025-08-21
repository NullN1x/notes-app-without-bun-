"use client";

import { Notebook } from "@/db/schema";
import React from "react";

interface NotebookCardProps {
  notebook: Notebook;
}

const Notebooks = ({ notebook }: NotebookCardProps) => {
  return <div>{notebook.name}</div>;
};

export default Notebooks;
