import "./BallMotion.css"

function BallMotion() {
  const size:number = Math.random()* 120
    return (
        <div id="ball" style={{
        top: `${Math.random()* 70}%`,
        left: `${Math.random()* 60}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#2F0147"
      }}></div>
    )
}

export default BallMotion;