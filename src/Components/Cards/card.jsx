export default function Card({img, title, price}){
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}