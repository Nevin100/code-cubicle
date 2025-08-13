interface CardContentProps extends ProblemStatement {
  className?: string;
  locked?: boolean; // new prop to mark locked state
}

interface ProblemStatement {
  title: string;
  category: string;
  description: string;
  Statement: string;
  Submission: string;
}

export const CardContent = ({
  title,
  category,
  description,
  Statement,
  Submission,
  className,
  locked = true,
}: CardContentProps) => (
  <div
    className={`${className} relative overflow-clip bg-secondary dark:bg-gray-800 rounded-3xl px-6 py-6 grid grid-rows-[auto_auto_auto_1fr] sm:gap-3 md:gap-5 shadow-lg dark:shadow-black/50 transition-colors duration-300`}
  >
    {/* Actual Card Content */}
    <h4 className="font-bold text-lg md:text-xl xl:text-2xl italic tracking-wide relative overflow-hidden group flex justify-center items-center text-gray-900 dark:text-gray-100">
      <span className="group-hover:opacity-0 opacity-100 transition-all duration-300">
        Problem
      </span>
      <span className="absolute left-0 top-0 w-0 h-full bg-pink-600/10 dark:bg-pink-400/20 group-hover:w-full transition-all duration-500 overflow-hidden rounded-xl flex justify-center items-center">
        Statement
      </span>
    </h4>

    <h3 className="capitalize font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-lg py-2">
      {title}
    </h3>

    <p className="text-left py-6 tracking-wide text-sm sm:text-base md:text-lg font-light text-gray-700 dark:text-gray-300">
      <span className="font-semibold text-pink-600 dark:text-pink-400">
        Category:{" "}
      </span>
      <span className="capitalize">{category}</span>
    </p>

    <p className="text-left text-gray-700 dark:text-gray-300 text-pretty sm:my-4 text-[0.9rem] sm:text-base flex items-center">
      {description}
    </p>

    <p className="text-left text-gray-700 dark:text-gray-300 sm:my-2 my-3 text-[0.9rem] sm:text-base flex items-center">
      Problem Statement:{" "}
      <a
        href={Statement}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors duration-300 ml-1 underline truncate"
        title={Statement}
      >
        {Statement}
      </a>
    </p>

    <p className="text-left text-gray-700 dark:text-gray-300 sm:my-2 my-3 text-[0.9rem] sm:text-base flex items-center">
      Submission:{" "}
      <a
        href={Submission}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors duration-300 ml-1 underline truncate"
        title={Submission}
      >
        {Submission}
      </a>
    </p>

    {/* Locked Overlay */}
    {locked && (
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white rounded-3xl">
        <span className="text-3xl mb-2">🔒</span>
        <p className="text-lg font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors duration-300 ml-1 underline truncate ">
          Locked
        </p>
        <p className="text-md opacity-90">Will be unlocked soon 😊</p>
      </div>
    )}
  </div>
);
