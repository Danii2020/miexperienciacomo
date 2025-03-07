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
import { useEffect } from "react";

interface Props {
    content: EditorOptions["content"];
    onUpdate?: (content: string) => void;
}

const BodyTextEditor = ({ content, onUpdate }: Props) => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "prose min-h-[60vh] p-4 bg-white rounded-xl"
            },
        },
        immediatelyRender: false,
        onUpdate: ({ editor: _editor }) => {
            const jsonContent = _editor.getJSON();
            localStorage.setItem("_editorContent", JSON.stringify(jsonContent));
            onUpdate?.(editor?.getHTML() || "");
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
                validate: (href: string) => /^https?:\/\//.test(href)
            }),
            Youtube.configure({
                inline: false,
                nocookie: true
            })
        ],
        content
    });

    useEffect(() => {
        if (editor && content && editor.getHTML() !== content) {
          editor.commands.setContent(content, false);
        }
      }, [content, editor]);

    if (!editor) {
        return null;
    }

    return (
        <>
            <ToolBar editor={editor} />
            <br />
            <EditorContent editor={editor} required/>
        </>
    )
};

export default BodyTextEditor;
