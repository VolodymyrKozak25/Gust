// main page displaying all the notes in a chronological list below

import Note from "@/components/Note";
import NoteList from "@/components/NoteList";
import INote from "@/interfaces/INote";

const notesList: INote[] = [
  {
    createdAt: "1",
    isPermanent: true,
    time: "13:15",
    title: "How I did oopsie",
    text: "Hello adf dfdfadf dsf",
  },
  {
    createdAt: "1",
    isPermanent: true,
    time: "3:00PM",
    title: "123",
    text: "World adfasdfasdfae f ",
  },
  {
    createdAt: "12",
    isPermanent: false,
    time: "12:30",
    title: "afe",
    text: "!!!",
  },
  {
    createdAt: "12",
    isPermanent: false,
    time: "13:15",
    title: "How I did oopsie",
    text: "Hello adf dfdfadf dsf",
  },
];

export default function Notes() {
  // const groupedByDayNotes = notesList.reduce<Record<string, Note[]>>((accumulator, currentNote) => {
  //   const key = currentNote.createdAt;
  //   if (!accumulator[key]) {
  //     accumulator[key] = [];
  //   }
  //   accumulator[key].push(currentNote);
  //   return accumulator;
  // }, {});

  return (
    <>
      <div className="flex flex-col gap-2 px-4 py-1">
        <NoteList date="Today">
          <Note
            isPermanent={true}
            text="Hello adf dfdfadf dsf"
            title="How I did oopsie"
            time="13:15"
          ></Note>
          <Note
            isPermanent={true}
            text="World adfasdfasdfae f "
            title="123"
            time="3:00PM"
          ></Note>
          <Note isPermanent text="!!!" title="afe" time="12:30"></Note>
        </NoteList>
        <NoteList date="Yesterday">
          <Note
            isPermanent
            text="Hello adf dfdfadf dsf"
            title="How I did oopsie"
            time="13:15"
          ></Note>
          <Note
            isPermanent
            text="World adfasdfasdfae f "
            title="123"
            time="3:00PM"
          ></Note>
          <Note isPermanent text="!!!" title="afe" time="12:30"></Note>
        </NoteList>
      </div>
    </>
  );
}
