import React,{useState} from 'react'
import Data from './Data.js'
import './search.css'

const Search = () => {
    const [filter, setFilter] = useState("");
    const SearchText = (e) =>{
        setFilter(e.target.value)
    }
    let dataSearch = Data.cardData.filter( item => {
        return Object.keys(item).some( key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
             )
    });
  return (
    <>
            <section className="container" >
            <div className="header" align="center"> Image Gallery </div>
                    <div className ="col-12 mb-5">
                      <div className ="search">
                      <label className ="searchbar">Search </label>
                      <input type="text"
                      // className="from-control"
                      value={filter}
                      onChange={SearchText.bind(this)}
                      />
                    
                      </div>
                      {
                        dataSearch.map((item,index)=>{
                        return(
                          <div className="box" >
                            <img src={item.img} alt="img"/>
                          </div>
                         )
                        })
                      }
            </div>
            </section>
    </>
  )
}
export default Search;