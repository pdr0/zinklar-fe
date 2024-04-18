export const parseOwnerAndRepo = (url) => {
  if (!url) return;
  const pattern = /https:\/\/github\.com/g;
  const cleanedUrl = url.replace(pattern, '');
  return cleanedUrl;
};
