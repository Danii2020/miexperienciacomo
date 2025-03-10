import { forwardRef, useCallback, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import CodeIcon from "@mui/icons-material/Code";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Editor } from "@tiptap/react";
import URLInputModal from "../Modals/URLInputModal";

interface ToolBarProps {
    editor: Editor;
}

const ToolbarButton = forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean }
>(({ selected, ...props }, ref) => (
    <button
        type="button"
        ref={ref}
        {...props}
        className={`flex items-center justify-center p-2 border rounded ${selected
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
    />
));
ToolbarButton.displayName = "ToolbarButton";

const ToolBar = ({ editor }: ToolBarProps) => {
    const [showLinkModal, setShowLinkModal] = useState<boolean>(false);
    const [showImageModal, setShowImageModal] = useState<boolean>(false);
    const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

    const setUnsetLink = useCallback(() => {
        if (editor.isActive("link")) {
            editor.chain().focus().unsetLink().run();
            return;
        }
        setShowLinkModal(true);
    }, [editor]);

    const handleLinkSubmit = (url: string) => {
        if (url) {
            editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        }
        setShowLinkModal(false)
    };

    const handleImageSubmit = (url: string) => {
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
        setShowImageModal(false)
    };

    const handleVideoSubmit = (url: string) => {
        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: 320,
                height: 180,
            });
        }
        setShowVideoModal(false)
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                {/* Formatting Buttons */}
                <div className="flex gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        selected={editor.isActive("bold")}
                    >
                        <FormatBoldIcon />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        selected={editor.isActive("italic")}
                    >
                        <FormatItalicIcon />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        selected={editor.isActive("underline")}
                    >
                        <FormatUnderlinedIcon />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        selected={editor.isActive("strike")}
                    >
                        <FormatStrikethroughIcon />
                    </ToolbarButton>
                </div>

                {/* Other Buttons */}
                <div className="flex gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        selected={editor.isActive("code")}
                    >
                        <CodeIcon />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    >
                        <FormatClearIcon />
                    </ToolbarButton>
                    <ToolbarButton onClick={setUnsetLink}>
                        {editor.isActive("link") ? <LinkOffIcon /> : <InsertLinkIcon />}
                    </ToolbarButton>
                    <ToolbarButton onClick={() => setShowImageModal(true)}>
                        <AddPhotoAlternateIcon />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => setShowVideoModal(true)}>
                        <YouTubeIcon />
                    </ToolbarButton>
                </div>
                <div className="flex gap-1">
                    <ToolbarButton
                        value="heading2"
                        aria-label="Toggle Heading 2 selection"
                        onClick={() =>
                            editor.chain().focus().toggleHeading({ level: 2 }).run()
                        }
                        selected={editor.isActive("heading2")}>
                        h2
                    </ToolbarButton>
                    <ToolbarButton
                        value="toggleHeading-3"
                        aria-label="Toggle Heading 3 selection"
                        onClick={() =>
                            editor.chain().focus().toggleHeading({ level: 3 }).run()
                        }
                        selected={editor.isActive("toggleHeading-3")}>
                        h3
                    </ToolbarButton>
                    <ToolbarButton
                        value="toggleHeading-4"
                        aria-label="Toggle Heading 4 selection"
                        onClick={() =>
                            editor.chain().focus().toggleHeading({ level: 4 }).run()
                        }
                        selected={editor.isActive("toggleHeading-4")}>
                        h4
                    </ToolbarButton>
                </div>

                {/* Lists and Alignment */}
                <div className="flex gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        selected={editor.isActive("bulletList")}
                    >
                        <FormatListBulletedIcon />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        selected={editor.isActive("orderedList")}
                    >
                        <FormatListNumberedIcon />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        selected={editor.isActive("blockquote")}
                    >
                        <FormatQuoteIcon />
                    </ToolbarButton>
                </div>
            </div>
            <URLInputModal
                isOpen={showLinkModal}
                onClose={() => setShowLinkModal(false)}
                handleInsert={handleLinkSubmit}
                type="el enlace"
                placeholder="https://example.com"
            />
            
            <URLInputModal
                isOpen={showImageModal}
                onClose={() => setShowImageModal(false)}
                handleInsert={handleImageSubmit}
                type="la imagen"
                placeholder="https://example.com/image.jpg"
            />
            
            <URLInputModal
                isOpen={showVideoModal}
                onClose={() => setShowVideoModal(false)}
                handleInsert={handleVideoSubmit}
                type="el video de YouTube"
                placeholder="https://youtube.com/watch?v=..."
            />
        </>
    );
};

export default ToolBar;
