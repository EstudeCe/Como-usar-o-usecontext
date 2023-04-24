import Repository from "./Repository";
import useRepository from "../hooks/useRepository";

export default function Container() {
  const context = useRepository();

  const { repos } = context;

  return (
    <div>
      {repos.map((repo) => (
        <>
          <strong>{repo.full_name}</strong>
          <Repository repo={repo} />
        </>
      ))}
    </div>
  );
}
