import { RepoSectionPropsType } from "@/types";
import RepoCard from "./RepoCard";
import CommitCard from "./CommitCard";

const RepoSection = ({
    searchTitle,
    sortBy,
    onSortChange,
    onDirectionChange,
    repos,
    isRepoLoading,
    getCommits,
    selectedRepo,
    commits,
    isCommitLoading,
}: RepoSectionPropsType) => (
    <>
        <p className="text-center text-2xl capitalize my-[2rem] font-bold">
            {searchTitle} Organization
        </p>
        <div className="flex justify-end mt-[2rem] mb-[1rem] gap-2">
            <select
                value={sortBy.sort}
                onChange={onSortChange}
                className="rounded bg-black px-4 outline-none py-1"
            >
                <option value="createdAt">Created At</option>
                <option value="full_name">Name</option>
            </select>
            <select
                value={sortBy.direction}
                onChange={onDirectionChange}
                className="rounded bg-black px-4 outline-none"
            >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
            <div>
                <h2 className="text-2xl mb-5">
                    Top Repositories by{" "}
                    <span className="capitalize">{sortBy.sort}</span>
                </h2>
                {isRepoLoading ? (
                    <p>Loading...</p>
                ) : (
                    repos.map((repo, idx) => (
                        <RepoCard
                            key={idx}
                            getCommits={getCommits}
                            repo={repo}
                            selectedRepo={selectedRepo as string}
                        />
                    ))
                )}
            </div>
            {selectedRepo && (
                <div>
                    <h2 className="text-2xl mb-5">
                        Recent Commits for {selectedRepo}
                    </h2>
                    {isCommitLoading ? (
                        <p>Loading...</p>
                    ) : commits.length ? (
                        commits.map((commit) => (
                            <CommitCard commit={commit} key={commit.sha} />
                        ))
                    ) : (
                        <p>No Repo Data</p>
                    )}
                </div>
            )}
        </div>
    </>
);

export default RepoSection;
