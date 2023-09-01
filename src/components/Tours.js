import Card from "./Card";

function Tours({tours,removeHandler}){


    // always paas a unique identifier when using map function on a companent (key=)

  return (
     
    <div className="container">
        <div>
            <h2 className="title">Plan with Nish</h2>
        </div>
        

        
        <div className="cards">
               {
                tours.map((tour)=>{
                  return <Card key={tour.id} {...tour} removeHandler={removeHandler}></Card>;
                })
               }
        </div>
            
    </div>

  );
}

export default Tours;