const GITHUB_PROFILE_URL = "https://api.github.com/users/Abhishek-Sonje";

type GitHubProfileResponse = {
  name: string | null;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
};

export async function GET() {
  try {
    const response = await fetch(GITHUB_PROFILE_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return Response.json(
        { error: "GitHub profile unavailable" },
        { status: 502 },
      );
    }

    const profile = (await response.json()) as GitHubProfileResponse;

    return Response.json({
      name: profile.name ?? profile.login,
      login: profile.login,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
    });
  } catch {
    return Response.json(
      { error: "GitHub profile unavailable" },
      { status: 502 },
    );
  }
}
