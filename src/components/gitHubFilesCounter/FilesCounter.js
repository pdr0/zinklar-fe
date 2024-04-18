import { useState, useEffect } from 'react';
import { RepoInput } from './RepoInput';
import { FilesCounterResults } from './FilesCounterResults';
import { useExtFilesTree } from '../../hooks/gitHub/useExtFilesTree';

export const FilesCounter = ({ token }) => {
  const [results, setResults] = useState([]);
  const [filteredList, setFilteredList] = useState({});
  const [isLoading, error, getExtensionFilesCount] = useExtFilesTree(token);

  useEffect(() => {
    results.length > 0 && groupItems(results);
  }, [results]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const repoUrl = event.target[0].value;
    getExtensionFilesCount(repoUrl).then((results) => setResults(results));
  };

  const groupItems = (items) => {
    const uniqs = items.reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
      return acc;
    }, {});
    setFilteredList(uniqs);
  };

  return (
    <section>
      <p>Añade la URL del repositorio que quieras analizar</p>
      <RepoInput handleSubmit={handleSubmit} />
      <FilesCounterResults
        error={error}
        isLoading={isLoading}
        filteredList={filteredList}
      />
    </section>
  );
};
