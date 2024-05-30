import React, { useState } from "react";
import Item from "../../models/Item";
import classNames from "classnames";
import ItemType from "../../models/ItemType";
import { CiFolderOn } from "react-icons/ci";
import { PlayButton } from "../buttons/PlayButton";
import { PlayingGraphics } from "../graphics/PlayingGraphics";

export const DisplaySimpleItem = (props: Item) => {
  const type = props.type;
  const roundedClass =
    type === ItemType.ARTIST ? "rounded-full" : "rounded-l-md";

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="relative flex w-full rounded-md bg-[rgba(38,38,38,0.7)]"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={classNames(
          "min-h-12 min-w-12 max-h-12 max-w-12 flex justify-center items-center text-neutral-300",
          roundedClass
        )}
      >
        {type === ItemType.FOLDER ? (
          <CiFolderOn size={32} />
        ) : (
          props.image !== undefined &&
          typeof props.image === "string" && (
            <img
              className={classNames("h-12 w-12 object-cover", roundedClass)}
              alt={props.title}
              src={props.image}
            />
          )
        )}
      </div>
      <div className="ml-2 flex flex-col justify-center text-left leading-tight pr-12">
        <span className="font-bold text-sm text-white">{props.title}</span>
      </div>
      <div className="absolute top-0 right-2 h-full flex items-center">{false ? <PlayingGraphics className={'mr-2'} /> : hover && <PlayButton className="p-2 shadow-2xl" size={10} onClick={() => {}} />}</div>
    </div>
  );
};