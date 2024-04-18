export const FileCard = ({ fileExtension, count, logoSrc }) => (
  <>
    <div className="filecard">
      <img
        width={50}
        height={40}
        src={logoSrc}
        alt={`${fileExtension} file extension`}
      />
      <div>.{fileExtension}</div>
      <div>({count})</div>
    </div>
  </>
);
