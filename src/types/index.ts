export interface SortByType {
    sort: string;
    direction: string;
}

export interface RepoType {
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    visibility: string;
}

export interface RepoCardPropsType {
    repo: RepoType;
    selectedRepo: string;
    getCommits: (repoName: string) => void;
}

export interface SearchBarPropsType {
    org: string;
    onOrgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
}

export interface RepoSectionPropsType {
    searchTitle: string;
    sortBy: SortByType;
    onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onDirectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    repos: RepoType[];
    isRepoLoading: boolean;
    getCommits: (repoName: string) => void;
    selectedRepo: string | null;
    commits: CommitType[];
    isCommitLoading: boolean;
}

export interface CommitType {
    commit: {
        message: string;
        author: {
            name: string;
        };
    };
    committer?: {
        avatar_url: string;
    };
}

export interface CommitCardPropsType {
    commit: CommitType;
}
