import search from '../../assets/images/search.svg';

export const RepoInput = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="repourl"
        placeholder="https://api.github.com/repos/[USER]/[REPO]"
      />
      <button type="submit">
        <img src={search} width={21} height={21} alt="Search" />
      </button>
    </form>
  );
};
