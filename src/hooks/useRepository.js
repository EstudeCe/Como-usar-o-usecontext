import { useContext } from "react";
import { RepositoryContext } from "../contexts/RepositoryContext";

export default function useRepository() {
  const context = useContext(RepositoryContext);

  return context;
}
