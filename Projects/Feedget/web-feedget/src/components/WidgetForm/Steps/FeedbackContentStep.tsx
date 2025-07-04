import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSend: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSend,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({ screenshot, comment, isAnonymous });

    onFeedbackSend();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 mb-2">
          Deixe seu feedback
        </span>

        <img
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
          className="w-6 h-6"
        />
        {feedbackTypeInfo.title}

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="
            min-w-[304px] 
            w-full min-h-[112px] 
            text-sm
            placeholder-zinc-400 
            text-zinc-100 
            border-zinc-600 
            bg-transparent rounded-md 
            focus:border-brand-500 
            focus:ring-brand-500
            focus:ring-1 
            focus:outline-none
            resize-none
            scrollbar-thumb-zinc-700
            scrollbar-track-transparent
            scrollbar-thin
          "
          placeholder="Deixe seu feedback"
          onChange={(event) => setComment(event.target.value)}
        />

        
        <div className="mt-2 mb-6 ml-[5px] flex items-center gap-2">
          <input
            id="anonymous"
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <label
            htmlFor="anonymous"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Enviar anonimamente
          </label>
        </div>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 ? true : false}
            className=" 
              p-2
              bg-brand-500
              rounded-md
              border-transparent
              flex-1
              flex 
              justify-center
              items-center
              text-sm
              hover:bg-brand-300
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-zinc-900
              focus:ring-brand-500
              transition-color
              duration-100
              disabled:opacity-50
              disabled:hover:bg-brand-500
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
