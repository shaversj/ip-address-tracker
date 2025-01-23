import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Tracker } from "~/tracker/tracker";
import { data } from "react-router";

export function meta({}: Route.MetaArgs) {
  // return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
  return [{ title: "Ip Address Tracker" }];
}

export default function Home() {
  return <Tracker />;
}
