import Clock from 'react-live-clock';
export default function LiveClock( ){
  return (
    <Clock format={'h:mm:ss A'} ticking={true} timezone={'Asia/Kuala_Lumpur'} />
  )
}