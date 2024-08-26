import type { Metadata } from "next";
import { Pokes } from "@/app/components/pokes/Pokes";

export default function IndexPage() {
  return <Pokes />;
}

export const metadata: Metadata = {
  title: "PokeDex - Pokemon",
};
