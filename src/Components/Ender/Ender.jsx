export default function Ender({img, title, desc}){
    return (
        <div className="ender">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}