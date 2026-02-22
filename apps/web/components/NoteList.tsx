interface NoteListProps {
  children: React.ReactNode;
  date: string;
  notes?: Note[];
}

export default function NoteList({ children, date, notes }: NoteListProps) {
  return (
    <div className="flex flex-col content-center items-start rounded-sm border-gray-500 border">
      <h2 className="text-xl font-bold">{date}</h2>
      <ul className="flex flex-col flex-3 gap-2 w-full p-2 border-b-blue-500 border-3">
        {children}
      </ul>
    </div>
  );
}
