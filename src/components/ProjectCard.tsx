import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  imgUrl,
  title,
  description,
  tags,
}: {
  imgUrl: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center group">
      <div className="flex items-center justify-center relative overflow-hidden">
        {/* image */}
        <Image
          src={imgUrl}
          width={500}
          height={500}
          alt="project"
          className="rounded-lg"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[#181818] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>

        {/* link */}
        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-14 group-hover:sm:-translate-y-12 group-hover:md:-translate-y-16 group-hover:lg:-translate-y-14 transition-all duration-300 text-white flex space-x-2">
          <div className="rounded-full border-2 p-2 group/ryan  border-gray-400 hover:border-white hover/ryan">
            <Link
              href={"#"}
              className="h-14 w-14 border-gray-400 hover/ryan:border-white rounded-full "
            >
              <CodeBracketIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white " />
            </Link>
          </div>
          <div className="rounded-full border-2 p-2 group/ryan  border-gray-400 hover:border-white hover/ryan">
            <Link
              href={"#"}
              className="h-14 w-14  border-gray-400 hover/ryan:border-white rounded-full group/ryan"
            >
              <EyeIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white " />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] mt-2">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

// return (
//   <div className="mb-4 sm:mb-0">
//     <div
//       className="h-52 md:h-72 rounded-t-xl relative group"
//       style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//     >
//       <div className="overlay hidden justify-center items-center absolute inset-0 bg-[#181818] group-hover:flex group-hover:bg-opacity-80 space-x-2">
//         <Link
//           href={"#"}
//           className="h-14 w-14 border-2 border-gray-400 hover:border-white rounded-full relative group/ryan"
//         >
//           <CodeBracketIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white absolute " />
//         </Link>
//         <Link
//           href={"#"}
//           className="h-14 w-14 border-2 border-gray-400 hover:border-white rounded-full relative group/ryan"
//         >
//           <EyeIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         </Link>
//       </div>
//     </div>
//     <div className="text-white rounded-b-xl bg-[#181818] mt-2">
//       <h5 className="text-xl font-semibold">{title}</h5>
//       <p className="text-gray-400">{description}</p>
//     </div>
//   </div>
// );
