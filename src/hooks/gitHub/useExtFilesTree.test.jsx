import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { useExtFilesTree } from './useExtFilesTree';

// Mock axios get method
jest.mock('axios');

describe('useExtFilesTree', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return isLoading as true initially', async () => {
    axios.get.mockResolvedValueOnce({ data: { tree: [] } });
    const { result, waitForNextUpdate } = renderHook(() =>
      useExtFilesTree('fakeToken'),
    );

    expect(result.current[0]).toBe(true); // isLoading should be true initially

    await waitForNextUpdate(); // Wait for the hook to finish loading

    expect(result.current[0]).toBe(false); // isLoading should be false after loading
  });

  it('should return error if API call fails', async () => {
    const errorMessage = 'API Error';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() =>
      useExtFilesTree('fakeToken'),
    );

    await waitForNextUpdate();

    expect(result.current[1].message).toBe(errorMessage);
  });

  // Add more test cases as needed for different scenarios
});
