interface NoteListProps {
  children: React.ReactNode;
  date: string;
}

export default function NoteList({ children, date }: NoteListProps) {
  return (
    <div className="flex flex-col content-center items-start rounded-sm">
      <h2 className="text-xl font-semibold font-sans">{date}</h2>
      <ul className="flex flex-col flex-3 gap-2 w-full p-2 border-gray-300 border font-sans">
        {children}
      </ul>
    </div>
  );
}
