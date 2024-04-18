import axios from 'axios';
import { useState, useCallback } from 'react';
import { parseOwnerAndRepo } from '../../utils/parseOwnerRepo';
import {
  requestHeaders,
  proxyOptions,
  gitHubApiUrl,
} from '../../config/config';

export const useDefaultBranch = (token) => {
  const [error, setError] = useState();
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDefaultBranch = useCallback(
    async function (repoUrl) {
      const apiUrl = `${gitHubApiUrl}/repos${parseOwnerAndRepo(repoUrl)}`;
      try {
        setIsLoading(true);
        const branch = await axios.get(apiUrl, {
          headers: { ...requestHeaders, Authorization: `Bearer ${token}` },
          proxy: { ...proxyOptions },
        });
        setResult(branch.data.default_branch);
        setIsLoading(false);
        return branch.data.default_branch;
      } catch (error) {
        setError(error);
        throw new Error(error);
      }
    },
    [token],
  );

  return [getDefaultBranch, isLoading, error, result];
};
