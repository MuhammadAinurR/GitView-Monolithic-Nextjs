import { CommitCardPropsType } from "@/types";
import Image from "next/image";
import React from "react";

const CommitCard: React.FC<CommitCardPropsType> = ({ commit }) => {
    const { message, author } = commit.commit;
    const avatarUrl = commit.committer?.avatar_url;

    return (
        <div className="border-gray-700 border-[1px] py-2 px-4 overflow-x-clip">
            <p className="font-bold">{message}</p>
            <div className="flex gap-2 items-center mt-2">
                {avatarUrl && (
                    <Image
                        className="w-[20px] h-[20px] rounded-full bg-white"
                        src={avatarUrl}
                        alt={`${author.name}'s avatar`}
                        width={20}
                        height={20}
                    />
                )}
                <p className="text-[#8E959E] text-sm items-center content-center align-middle h-full">
                    Author: {author.name}
                </p>
            </div>
        </div>
    );
};

export default CommitCard;
