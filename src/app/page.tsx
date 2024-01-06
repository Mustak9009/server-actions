import Image from "next/image";
import React from "react";
import {revalidatePath} from 'next/cache';
import Form from './Form';
export default function Home() {

  return (
    <div className="h-screen min-w-full w-full flex justify-center items-center">
      <Form/>
    </div>
  );
}
