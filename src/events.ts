import { BoardId } from "./kernel";

export type BoardDeletedEvent = {
  type: "board/deleted/v1";
  payload: {
    boardId: BoardId;
  };
};

export type BoardAddedEvent = {
  type: "board/added/v1";
  payload: {
    boardId: BoardId;
  };
};

export type GlobalEvents = BoardDeletedEvent | BoardAddedEvent;
