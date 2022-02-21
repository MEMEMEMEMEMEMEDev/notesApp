import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../reducers/actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector( state => state.notes );

  const handleSave = () => {
    dispatch ( startSaveNote(active));
  }

//   const handlePictureClick = () => {
//     document.querySelector('#fileSelector').click();
// }

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if ( file ) {
        dispatch( startUploading( file ) );
        console.log(file);
    }
}

return (
  <div className="notes-appbar">
      <input 
          id="fileSelector"
          type="file"
          name="file"
          style={{ display: 'none' }}
          onChange={ handleFileChange }
      />

          {/* <button 
              className='notes-appbar__picture'
              onClick={ handlePictureClick }
          >
              <i class="fa-solid fa-folder"></i>
          </button> */}

          <button 
              className='notes-appbar__save'
              onClick={ handleSave }
          >
              <i className="fa-solid fa-floppy-disk"></i>
          </button>
  </div>
)
}
