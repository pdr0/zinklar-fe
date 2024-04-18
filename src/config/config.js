const gitHubApiUrl = 'https://api.github.com';

const proxyOptions = {
  protocol: window.location.protocol,
  host: window.location.host,
};

const requestHeaders = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

export { requestHeaders, proxyOptions, gitHubApiUrl };
