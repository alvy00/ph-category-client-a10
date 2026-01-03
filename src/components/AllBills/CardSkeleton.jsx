/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const CardSkeleton = () => {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="h-full">
            <div className="card h-full bg-base-200 border border-base-300 shadow-md animate-pulse max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
                {/* Image skeleton */}
                <figure className="h-40 bg-gray-300 dark:bg-gray-700 rounded-t-lg overflow-hidden" />

                {/* Body skeleton */}
                <div className="card-body p-6 flex flex-col">
                    {/* Title */}
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4" />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
                        <div className="h-5 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
                        <div className="h-5 w-14 bg-gray-300 dark:bg-gray-700 rounded" />
                    </div>

                    {/* Spacer */}
                    <div className="grow" />

                    {/* Amount + Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
                        <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-3 sm:mb-0" />
                        <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CardSkeleton;
