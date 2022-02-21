import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../reducers/actions/notes';

export const JournalEntry = ({ id, date, title, body }) => {

  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch( activeNote(id, {
      date, title, body
    }))
  }

  return (
    <div className='journal-main__entries-task'
     onClick={handleEntryClick}
    >
      <h3>{ title }</h3>
      <div className='journal-main__entries-task__date'>
        <span> {noteDate.format('dddd')} </span>
        <p> {noteDate.format('Do')} </p>
      </div>
    </div>
  )
};
