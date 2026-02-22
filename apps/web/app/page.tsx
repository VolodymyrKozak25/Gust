// main page displaying all the notes in a chronological list below

import NoteList from "@/components/NoteList";
import Note from "@/components/Note";
import Button from "../components/Button";

export default function Notes() {
  return (
    <>
      <div className="flex content-center items-center w-full h-12 border-b-[1]">
        <Button>Review</Button>
        <Button>Permanent</Button>
        <Button className="ml-auto">Login</Button>
      </div>
      <div className="flex flex-col gap-2 px-2 py-1">
        <NoteList date="Today">
          <Note
            text="Hello adf dfdfadf dsf"
            title="How I did oopsie"
            time="13:15"
          ></Note>
          <Note text="World adfasdfasdfae f " title="123" time="3:00PM"></Note>
          <Note text="!!!" title="afe" time="12:30"></Note>
        </NoteList>
        <NoteList date="Yesterday">
          <Note
            text="Hello adf dfdfadf dsf"
            title="How I did oopsie"
            time="13:15"
          ></Note>
          <Note text="World adfasdfasdfae f " title="123" time="3:00PM"></Note>
          <Note text="!!!" title="afe" time="12:30"></Note>
        </NoteList>
      </div>
    </>
  );
}
