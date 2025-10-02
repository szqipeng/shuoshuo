// Gwitter Configuration

export interface GwitterConfig {
  request: {
    token: string;
    clientID: string;
    clientSecret: string;
    owner: string;
    repo: string;
    pageSize?: number;
    autoProxy?: string;
  };
  app?: {
    onlyShowOwner?: boolean;
    enableRepoSwitcher?: boolean;
    enableAbout?: boolean;
    enableEgg?: boolean;
  };
}

// Default configuration
export const config: GwitterConfig = {
  request: {
    token:
      process.env.GITHUB_TOKEN,
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    pageSize: 6,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: 'szqipeng',
    repo: 'shuoshuo',
  },
  app: {
    onlyShowOwner: true,
    enableAbout: false,
    enableRepoSwitcher: false,
    enableEgg: false,
  },
};
