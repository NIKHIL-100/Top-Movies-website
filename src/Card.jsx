import React from "react";
import { useState } from "react";
// import { useReducer } from "react";
import "./Card.css";

const Card = (props) => {
    console.log(props);

    // useState for Like's & View's 
    const [view , setView] = useState(null);
    // const [like , setLike] = useState(null);
    const handelView = () => {setView(view + 1)};
    // const handelLike = () => {setLike(like + 1)};

    

      // useReducer for rating bar
    const initialState = { width: 25 };
    const reducer = (state, action) => {
    switch (action) {
    case 'plus':
      return { width: state.width + 50 }
    case 'minus':
      return { width: Math.max(state.width - 50, 2) }
    default:
      throw new Error("what's going on?" )
  }
}
// const [state, dispatch] = useReducer(reducer, initialState);

    
  return (
    <>
 
      
      <div className="cards col__3">
        <div className="card  ">
          <img src={props.imgsrc} alt="pic" className="card__img" />
          <div className="card__info">
            <h3 className="card__title" style={{margin:'auto' , font:'caption'}} >{props.sname}</h3>
            <span className="card__category" style={{font:'small-caption'}} ><u>{props.title}</u></span>

         {/*   <div className="like-view">

            <div >
            <button className="btn"  style={{backgroundColor:"black", color:"white"}} onClick={ () => {
              if (like > 0) setLike(null)
              else if(like < 1) setLike(like + 1)
            }}  > 
            <img style={{height:"30px", width:"30px", backgroundColor:"black"}} src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png"  />
            </button>
            </div>likes {like}
            
            <div>
             <p className="p">VIEW'S {view} </p>
            </div>
            </div>
          */}
          
              <button style={{marginBottom:'15px', padding:"4px", marginInline:"90px"}} className="btn-watch" onClick={handelView}>  <a style={{color:"white", textDecoration:"none"}} href={props.link} target="_blank" rel="noreferrer">Watch Now </a></button>
           

            {/* usereducer rating bar */}
           {/* <div style={{ background: 'yellow', height: '7px', width: state.width ,maxWidth: '250px'}}></div>
              <div style={{marginTop: '0.5rem'}}>
                  <button style={{background: 'black' }} onClick={() => dispatch('plus')}>👍</button>
                  <button style={{background: 'black' , marginLeft:'180px' }} onClick={() => dispatch('minus')}>👎</button>
          </div>*/}

          </div>
        </div>
      </div>
   

    </>
    
  );
    
}

export default Card;