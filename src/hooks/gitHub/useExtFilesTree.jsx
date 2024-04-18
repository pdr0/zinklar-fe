import axios from 'axios';
import { useState } from 'react';
import { parseOwnerAndRepo } from '../../utils/parseOwnerRepo';
import { useDefaultBranch } from './useDefaultBranch';
import {
  gitHubApiUrl,
  proxyOptions,
  requestHeaders,
} from '../../config/config';

export const useExtFilesTree = (token) => {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [getDefaultBranch] = useDefaultBranch(token);

  const files = [];

  const getRepoTree = async (apiUrl) => {
    try {
      const tree = await axios.get(apiUrl, {
        headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
        proxy: { ...proxyOptions },
      });

      for (const item of tree.data.tree) {
        // Check if is a directory
        if (item.type === 'tree') {
          await getRepoTree(item.url);
        } else {
          // Add the file extension
          const ext = item.path.split('.').pop();
          !!ext && files.push(ext);
        }
      }
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };

  const getExtensionFilesCount = async (repoUrl) => {
    setLoading(true);
    const branch = await getDefaultBranch(repoUrl);
    const apiUrl = `${gitHubApiUrl}/repos${parseOwnerAndRepo(
      repoUrl,
    )}/git/trees/${branch}`;
    await getRepoTree(apiUrl);
    setLoading(false);
    return files;
  };

  return [isLoading, error, getExtensionFilesCount];
};
