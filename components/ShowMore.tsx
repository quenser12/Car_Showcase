"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

// we add ShowMoreProps to make it a type of ShowMoreProps
const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {
        // pageNumber is 1 and then it precedes
        const newLimit = (pageNumber + 1) * 10;
        //newLimit is wrapped in template string
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName, {scroll:false})
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore