import { useContext } from "react";
import context from "../context/StaticContext";

export default function useGlobalData() {
  const data = useContext(context);
  return data;
}
