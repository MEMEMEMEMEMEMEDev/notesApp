import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../reducers/actions/notes";
import { Notes } from "../notes/Notes";
import { NotesAppBar } from "../notes/NotesAppBar";
import { JournalEntries } from "./JournalEntries";
import NewSiderBar from "./NewSideBar";
import { NothingSelected } from "./NothingSelected";

export const JournalScreen = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <div className="journal">
      <div className="journal-nav">
        <NewSiderBar />
      </div>
      <div className="journal-main">
        <div className="journal-main__entry" onClick={handleAddNew}>
          <i className="far fa-calendar-plus fa-5x" />
          <p>New Entry</p>
        </div>
        <JournalEntries />
        {active ? (
          <>
            <NotesAppBar />
            <Notes />
          </>
        ) : (
          <NothingSelected />
        )}
      </div>
    </div>
  );
};
