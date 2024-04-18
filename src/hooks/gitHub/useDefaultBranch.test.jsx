import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { useDefaultBranch } from './useDefaultBranch'; // Assuming your hook file is named useDefaultBranch.js

jest.mock('axios');

describe('useDefaultBranch', () => {
  it('should fetch default branch correctly', async () => {
    // Mock axios response
    const mockBranchData = { default_branch: 'main' };
    axios.get.mockResolvedValueOnce({ data: mockBranchData });

    const token = 'mockToken';

    const repoUrl = 'https://github.com/owner/repo';

    const { result, waitForNextUpdate } = renderHook(() =>
      useDefaultBranch(token),
    );

    const [getDefaultBranch, isLoading, error, resultValue] = result.current;

    getDefaultBranch(repoUrl);

    expect(isLoading).toBe(true);

    await waitForNextUpdate();

    expect(isLoading).toBe(false);

    expect(error).toBeUndefined();

    expect(resultValue).toBe('main');
  });

  it('should handle errors correctly', async () => {
    const errorMessage = 'Error fetching default branch';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const token = 'mockToken';

    const repoUrl = 'https://github.com/owner/repo';

    const { result, waitForNextUpdate } = renderHook(() =>
      useDefaultBranch(token),
    );

    const [getDefaultBranch, isLoading, error, resultValue] = result.current;

    getDefaultBranch(repoUrl);

    expect(isLoading).toBe(true);

    await waitForNextUpdate();

    expect(isLoading).toBe(false);

    expect(error).toEqual(new Error(errorMessage));

    expect(resultValue).toBeNull();
  });
});
