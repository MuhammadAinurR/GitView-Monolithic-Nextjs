import { RepoCardPropsType } from "@/types";
import React from "react";

const RepoCard: React.FC<RepoCardPropsType> = ({
    repo,
    selectedRepo,
    getCommits,
}) => {
    const { name, stargazers_count, description, language, visibility } = repo;

    return (
        <div
            onClick={() => getCommits(name)}
            className={`mb-[1.5rem] hover:cursor-pointer hover:text-blue-400 bg-[#212830] rounded-md px-4 py-2 ${
                selectedRepo === name ? "text-blue-400" : ""
            }`}
        >
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm">Description: {description}</p>
            <p className="text-sm">Language: {language ? language : "-"}</p>
            <p className="text-sm">Visibility: {visibility}</p>
            <p className="text-sm">Stars: {stargazers_count}</p>
        </div>
    );
};

export default RepoCard;
