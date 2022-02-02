import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import useSound from 'use-sound';
import popDown from '../assets/sounds/pop-down.mp3';
import popUpOn from '../assets/sounds/pop-up-on.mp3';
import popUpOff from '../assets/sounds/pop-up-off.mp3';

function Box() {

    const [isChecked, setIsChecked] = React.useState(
        false
      );
    
      const [playActive] = useSound(
        popDown,
        { volume: 0.5 }
      );
      const [playOn] = useSound(
        popUpOn,
        { volume: 0.5 }
      );
      const [playOff] = useSound(
        popUpOff,
        { volume: 0.5 }
      );
    
      return (
        <Checkbox
          name="demo-checkbox"
          checked={isChecked}
          size={24}
          label="Confirmer"
          onChange={() => setIsChecked(!isChecked)}
          onMouseDown={playActive}
          onMouseUp={() => {
            isChecked ? playOff() : playOn();
          }}
        />
      );
}

export default Box