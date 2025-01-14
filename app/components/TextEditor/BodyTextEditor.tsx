'use client'

import * as React from "react";
import {
  useEditor,
  EditorContent
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorOptions } from "@tiptap/core";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

import ToolBar from "./ToolBar";

interface Props {
  content: EditorOptions["content"];
}

const BodyTextEditor = ({ content }: Props) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose min-h-screen p-4 bg-white rounded-xl"
      }
    },
    onUpdate: ({ editor: _editor }) => {
      console.log(_editor.getJSON());
      localStorage.setItem("_editorContent", JSON.stringify(_editor.getJSON()));
    },
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4, 5]
        }
      }),
      Image,
      TextStyle,
      Underline,
      Link.configure({
        validate: (href:string) => /^https?:\/\//.test(href)
      }),
      Youtube.configure({
        inline: false,
        nocookie: true
      })
    ],
    content
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <ToolBar editor={editor} />
      <br />
      <EditorContent editor={editor} />
    </>
  )
};

export default BodyTextEditor;
