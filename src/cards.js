import "./card.css"

const Cards=({img})=>{
    console.log(img);
     const imgcard=img.map((e,i)=>{
         return(
            <div className="col">
             <div className="card" key={i}>
                <div className="imgsec">
                 <img src={e.image} alt={e.brand}/>
                 </div>
                 <h2>{e.brand}</h2>
                 <p>{e.tag}</p>
                 <h3>{e.price}</h3>
             </div>
             </div>
         )
     })
   
   
     return(
         <div className="container">
            <div className="row">
            {imgcard}
            </div>
           
         </div>
     )
}

export default Cards