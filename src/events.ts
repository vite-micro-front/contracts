import { BoardId } from "./kernel";

export type BoardDeletedEvent = {
  type: "board/deleted";
  version: 1;
  payload: {
    boardId: BoardId;
  };
};

export type GlobalEvents = BoardDeletedEvent;
