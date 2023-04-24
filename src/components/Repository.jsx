export default function Repository(props) {
  const { repo } = props;

  return (
    <div>
      <small>size: {repo.size}</small>
    </div>
  );
}
