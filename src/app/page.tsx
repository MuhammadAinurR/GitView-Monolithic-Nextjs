"use client";
import RepoSection from "@/components/RepoSection";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import "react-toastify/dist/ReactToastify.css";

import { fetchOrgRepos, fetchRepoCommits } from "../../services/githubService";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CommitType, RepoType, SortByType } from "@/types";

const Home = () => {
    const [org, setOrg] = useState<string>("apache");
    const [repos, setRepos] = useState<RepoType[]>([]);
    const [commits, setCommits] = useState<CommitType[]>([]);
    const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
    const [searchTitle, setSearchTitle] = useState<string>("");
    const [isRepoLoading, setIsRepoLoading] = useState<boolean>(false);
    const [isCommitLoading, setIsCommitLoading] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<SortByType>({
        sort: "createdAt",
        direction: "desc",
    });
    const [mainLoading, setMainLoading] = useState<boolean>(true);

    const getRepos = async (sort: string, direction: string) => {
        if (!org) {
            toast("Please fill organization first!", { theme: "dark" });
            return;
        }
        setSelectedRepo(null);
        setIsRepoLoading(true);
        const repoData = await fetchOrgRepos(org, sort, direction);
        setRepos(repoData);
        setSearchTitle(org);
        setIsRepoLoading(false);
        setMainLoading(false);
    };

    const getCommits = async (repoName: string) => {
        setSelectedRepo(repoName);
        setIsCommitLoading(true);
        const commitData = await fetchRepoCommits(org, repoName);
        setCommits(commitData);
        setIsCommitLoading(false);
    };

    useEffect(() => {
        getRepos(sortBy.sort, sortBy.direction);
    }, [sortBy]);

    const handleOrgChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrg(e.target.value);
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSortBy({ ...sortBy, sort: e.target.value });
    const handleDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSortBy({ ...sortBy, direction: e.target.value });

    return (
        <div className="p-[2rem]">
            {mainLoading === true ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Header />
                    <SearchBar
                        org={org}
                        onOrgChange={handleOrgChange}
                        onSearch={() => getRepos(sortBy.sort, sortBy.direction)}
                    />
                    {repos.length ? (
                        <RepoSection
                            searchTitle={searchTitle}
                            sortBy={sortBy}
                            onSortChange={handleSortChange}
                            onDirectionChange={handleDirectionChange}
                            repos={repos}
                            isRepoLoading={isRepoLoading}
                            getCommits={getCommits}
                            selectedRepo={selectedRepo}
                            commits={commits}
                            isCommitLoading={isCommitLoading}
                        />
                    ) : (
                        <p className="text-center font-bold text-2xl p-5">
                            Organization not found
                        </p>
                    )}
                </>
            )}

            <ToastContainer />
        </div>
    );
};

export default Home;
