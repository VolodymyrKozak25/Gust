"use client";
//TODO:
//
//

import { useRef } from "react";
import styles from "./Note.module.css";

interface NoteProps {
  //id: string;
  isPermanent: boolean;
  time?: string;
  title?: string;
  text?: string;
}

export default function Note({
  isPermanent = false,
  time,
  title,
  text,
}: NoteProps) {
  const noteTextareaRef = useRef<HTMLTextAreaElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  function handleInput() {
    if (noteTextareaRef.current) {
      const textarea = noteTextareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  return (
    <div className="relative flex flex-col border-green-400 border-2">
      <input
        className={`${styles.input} text-lg`}
        ref={titleInputRef}
        defaultValue={title}
        maxLength={30}
      ></input>
      <textarea
        className={`${styles.textarea} p-2 text-sm`}
        ref={noteTextareaRef}
        defaultValue={text}
        placeholder="Enter your note here"
        rows={2}
        maxLength={300}
        onInput={handleInput}
      ></textarea>
      <time
        className="self-end absolute bottom-1 right-2 select-none"
        dateTime={time}
      >
        {time}
      </time>
    </div>
  );
}
