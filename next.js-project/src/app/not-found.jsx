import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>NotFound</h1>
      <p>This page does not exist</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
