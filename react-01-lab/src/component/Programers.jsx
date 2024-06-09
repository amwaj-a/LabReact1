
function Programers(props) {
  return (
    <div className="card" style={{background:props.company=='Twaq Academy'?
    "   rgb(126, 23, 223)":"rgb(83, 95, 107)"   }}>
<h1>{props.name}</h1>

<span>Languges: {props.lang} </span>
<span>years of work: {props.work} </span>
<span>company: {props.company} </span>

    </div>
  )
}

export default Programers