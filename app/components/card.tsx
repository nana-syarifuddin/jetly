import { RiCalendarEventLine, RiEyeLine, RiFileCopyLine } from "react-icons/ri";
import { LinkType } from "../dashboard/kelola-tautan/page";
import Link from "next/link";
import { dateFormater } from "@/libs/dateFormater";

const Card = ({ link }: { link: LinkType }) => {
    return (
      <div className="py-4" key={link.id}>
        <div className="p-4 rounded-[10px] bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-[10px] bg-[#FF735C] text-white mr-2 whitespace-nowrap">
                <span>jetly.vercel.app/{link.shortUrl}</span>
              </div>
              <Tooltip message="Salin">
                <RiFileCopyLine size={20} onClick={() => navigator.clipboard.writeText(`jetly.vercel.app/${link.shortUrl}`)} />
              </Tooltip>
            </div>
            <div>
              <Link href={`/dashboard/ubah-tautan/${link.id}`} className="hover:cursor-pointer text-blue-400 underline">
                Edit
              </Link>
            </div>
          </div>
          <span className="my-2 text-sm">{link.url}</span>
          <div className="flex items-center text-gray-500">
            <RiEyeLine size={20} className="mr-2" />
            <span className="text-sm">{link.visits}</span>
            <RiCalendarEventLine size={20} className="mx-2" />
            <span className="text-sm">{dateFormater.format(new Date(Date.parse(String(link.createdAt))))}</span>
          </div>
        </div>
      </div>
    );
  };
  
export default Card;

  const Tooltip = ({ message, children }: { message: string; children: React.ReactNode }) => {
    return (
      <div className="relative flex py-2 group cursor-pointer">
        {children}
        <span className="absolute p-2 -mx-2 text-xs text-white transition-all scale-0 rounded bg-zinc-900 -top-7 group-hover:scale-100">{message}</span>
      </div>
    );
  };
  