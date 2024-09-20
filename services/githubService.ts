import axios from "axios";

const GITHUB_API_URL = "/api";
const GITHUB_API_TOKEN = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

export const fetchOrgRepos = async (
    org: string,
    sort: string = "createdAt",
    direction: string = "desc"
) => {
    try {
        const response = await axios.get(
            `${GITHUB_API_URL}/orgs/${org}/repos`,
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_API_TOKEN}`,
                },
                params: {
                    sort: sort,
                    direction: direction,
                    per_page: 10,
                    page: 1,
                },
            }
        );
        return response.data;
    } catch (error: any) {
        if (error.status === 404) return [];
        return [];
    }
};

export const fetchRepoCommits = async (org: string, repo: string) => {
    try {
        const response = await axios.get(
            `${GITHUB_API_URL}/repos/${org}/${repo}/commits`,
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_API_TOKEN}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return [];
    }
};
