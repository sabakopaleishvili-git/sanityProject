import { Tag } from "@/types/types";

interface IProps {
  tags: Array<Tag>;
  selectedTagId: string[];
  setSelectedTagId: (tagId: string[]) => void;
}

const TagsList = ({ tags, selectedTagId, setSelectedTagId }: IProps) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag._id}
          type="button"
          className={`rounded-full border px-4 py-2 text-sm transition cursor-pointer
            ${
              selectedTagId.includes(tag._id)
                ? "border-fuchsia-400 bg-fuchsia-400/20 text-fuchsia-200"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500"
            }
          `}
          onClick={() => {
            if (selectedTagId.includes(tag._id)) {
              setSelectedTagId(selectedTagId.filter((id) => id !== tag._id));
            } else {
              setSelectedTagId([...selectedTagId, tag._id]);
            }
          }}
        >
          {tag.title}
        </button>
      ))}
      {selectedTagId.length > 0 && (
        <button
          type="button"
          className="ml-auto cursor-pointer text-slate-300 hover:text-slate-100 px-4 py-2 text-sm transition bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl"
          onClick={() => setSelectedTagId([])}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default TagsList;
