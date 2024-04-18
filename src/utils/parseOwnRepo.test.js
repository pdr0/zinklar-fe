import { parseOwnerAndRepo } from './parseOwnerRepo'; // Assuming your utility file is named parseOwnerRepo.js

describe('parseOwnerAndRepo', () => {
  it('should parse owner and repo correctly from GitHub URL', () => {
    const url = 'https://github.com/owner/repo';

    const parsed = parseOwnerAndRepo(url);

    expect(parsed).toBe('/owner/repo');
  });

  it('should return undefined if URL is not provided', () => {
    const parsed = parseOwnerAndRepo();

    expect(parsed).toBeUndefined();
  });

  it('should handle non-GitHub URLs gracefully', () => {
    const url = 'https://example.com/owner/repo';

    const parsed = parseOwnerAndRepo(url);

    expect(parsed).toBe(url); // Since it's not a GitHub URL, it should return the original URL
  });

  it('should handle GitHub URLs with additional paths', () => {
    const url = 'https://github.com/owner/repo/tree/main/src';

    const parsed = parseOwnerAndRepo(url);

    expect(parsed).toBe('/owner/repo/tree/main/src'); // It should remove only the GitHub domain part
  });

  it('should handle GitHub URLs with query parameters', () => {
    const url = 'https://github.com/owner/repo?utm_source=test';

    const parsed = parseOwnerAndRepo(url);

    expect(parsed).toBe('/owner/repo?utm_source=test'); // It should remove only the GitHub domain part
  });
});
