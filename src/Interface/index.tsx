interface Button {
  onClick: () => Promise<void>;
  btnClass: string;
  title: string;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}