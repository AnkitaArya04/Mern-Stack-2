// "use client"
import Image from "next/image";

export default function Home() {
  // console.log("The id is: ", process.env.ID)
  // console.log("The id is: ", process.env.SECRET)
  return (
  <div>
    Hey this is home. The id is {process.env.NEXT_PUBLIC_ID}
    Hey this is home and name {process.env.NAME}
  </div>
  );
}
