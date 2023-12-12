import React,{ useState} from 'react';
import StoreProducts from './StoreProducts.json';
import './App.css'


const FilterFunc = () => {
    const [items,setItems] = useState(StoreProducts);
    const [selectedCategory, setSelectedCategory] = useState('');

// -------------Filter by Categories
    const categoryItem = (e)=>{
        setSelectedCategory(e.target.value);
    }

    const filterItems = ()=>{  
        if(selectedCategory ==='all'){
            setItems(StoreProducts);
        } else{
        const updateItems = StoreProducts.filter((curItem)=>{
            return curItem.category === selectedCategory;
        });
        setItems(updateItems);
        } 
    }
// -------------Filter by Best before date for eating
 const filteredDate = (data, key, endDate )=>{ 
        endDate = new Date(endDate);

       const updateItems =  data.filter( d => {
        let time = new Date(d[key]);
        return ( time < endDate )
      });
      setItems(updateItems);
    }
    
// -------------Sorted by Price 
    const sortedPrice = ()=>{
        const updateItems = [...StoreProducts].sort((a,b)=>a.price - b.price);
        setItems(updateItems);
    }
// -------------Sorted by Name of Products
    const sortedName = ()=>{
        const updateItems = [...StoreProducts].sort((a,b)=>a.name.localeCompare(b.name));
        setItems(updateItems);
    }

// -------------Reset all Settings
    const resetItems = ()=>{
        
        setItems([]);
    }

  return (
    <div className='container mt-5'>
        <h1>Please select!</h1>
        
        <select name="categories" className="categories btn mb-3" onChange={categoryItem}>
            
        <optgroup label="Categories"> 
            <option value="all">All Products</option>
            <option value="powder">Powders</option>
            <option value="tea">Teas</option>
            <option value="dried_herbs">Dried Herbs</option>
            <option value="grains">Grains</option>
        </optgroup>
        </select>  
        <button type="button" className="btn btn-secondary me-3 mb-3" onClick={()=>filterItems()}>Filter by Category</button>
         
        <button type="button" className="btn btn-secondary me-3 mb-3" onClick={()=>sortedPrice()}>Sort by Price</button>
        <button type="button" className="btn btn-success me-3 mb-3" onClick={()=>sortedName()}>Sort by Name</button>
        <button type="button" className="btn btn-danger me-3 mb-3" onClick={()=>filteredDate(StoreProducts,'best_before_date','2025-12-31')}>Best before 2025</button>
        <button type="button" className="btn btn-warning me-3 mb-3"onClick={()=>resetItems()}>Reset</button>
       
        <hr></hr>
        <div className="container">
        <div className='row'>
            {items.map((val)=>(
                <div key={val.id} className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-3'>
                    <div className="card" >
                         <img src={val.image} className="card-img-top img-thumbnail" alt="..."/>
                         <div className="card-body">
                            <h6 className="card-title fst-italic fw-bolder">{val.name.substring(0,15)}</h6>
                            <h5><span className="badge bg-color">{val.price} €</span></h5>
                            <p className="card-text"><small>{val.category}</small></p>
                            <a className="btn btn-primary" href="/">Learn more</a>
                         </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
</div>
  )
}

export default FilterFunc