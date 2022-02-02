import useSound from 'use-sound';
import boopSfx from '../assets/sounds/send-sound.wav';


// send button
const BoopButton = () => {
  const [play] = useSound(boopSfx);
  return <div onClick={play} className='click-effect'><i className='paper plane icon' id='send'></i></div>;
};

export default BoopButton