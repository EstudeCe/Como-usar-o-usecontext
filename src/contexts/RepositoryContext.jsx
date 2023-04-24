import { createContext, useState, useEffect } from "react";

export const RepositoryContext = createContext();

export function RepositoryContextProvider({ children }) {
  const [name] = useState("vitorrsousaa");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/repos`)
      .then((response) => response.json())
      .then((response) => setRepos(response))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <RepositoryContext.Provider value={{ repos, name }}>
      {children}
    </RepositoryContext.Provider>
  );
}
