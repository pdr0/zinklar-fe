import { FileCard } from './FileCard';
import file from '../../assets/images/file.svg';

export const FilesCounterResults = ({
  isLoading,
  filteredList = {},
  error,
}) => {
  return (
    <div className="results">
      <p className="info">{isLoading && <span>Loading...</span>}</p>
      <p className="error">
        {error && <span>There is an error fetching... {error}</span>}
      </p>
      {Object.keys(filteredList).length > 0 &&
        Object.keys(filteredList).map((value, index) => (
          <FileCard
            key={index}
            logoSrc={file}
            fileExtension={value}
            count={filteredList[value]}
          />
        ))}
    </div>
  );
};
