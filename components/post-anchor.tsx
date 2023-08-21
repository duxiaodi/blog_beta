import cx from "classnames";
import { useTocHighlight } from "../hooks/useTocHighlight";
import { Anchor } from "../interfaces/post";
import { useMemo } from "react";

type Props = {
  anchors: Anchor[];
};

const PostAnchor = ({ anchors }: Props) => {
  const { currentIndex } = useTocHighlight();
  const selectedIndex = Math.min(currentIndex, anchors.length - 1);
  const minLevel = useMemo(
    () => Math.min(...anchors.map((anchor) => anchor.level)),
    [anchors]
  );
  if (!anchors.length) return null;
  return (
    <nav className="max-w-xs sticky top-16 hidden md:block">
      <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full">
        ON THIS PAGE
      </h2>
      <ul className="pl-4">
        {anchors.map((anchor, index) => (
          <li
            className={cx(
              "leading-[1.25em] text-[13px] pr-2 rounded-l-md",
              selectedIndex === index
                ? "text-[#f36] dark:bg-[rgba(22,24,29)]"
                : null
            )}
            style={{
              paddingLeft: `${(anchor.level - minLevel) * 1 + 0.5}rem`,
            }}
            key={anchor.id}
          >
            <a
              href={"#" + anchor.id}
              className="anchor text-link dark:text-link-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
            >
              {anchor.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostAnchor;
