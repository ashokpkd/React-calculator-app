import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const  backSpace = ()=>{
    try{
      setValue(value.slice(0,-1))
    }
    catch(err){
      setValue("error")
    }
  }

  const evaluate =()=>{
    try{
      setValue(eval(value))
    }
    catch(err){
      setValue("error")
    }
  }

const calculatorOff =()=>(
  setValue(" ")
)

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center align-items-center ">

        <div class="card mt-5 border-0" style={{width: "25rem",height:"450px"}}>
  <div class="card-body">
  <div style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#474545",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              className="calculator card "
            >
              <div className="p-3">
                <input
                  className="form-control text-end"
                  style={{ height: "50px" }}
                  type="text"
                  value={value}
                />
              </div>
              <div
                className="container d-flex flex-column justify-content-around mt-2"
              >
                <div className="row  row-cols-4 d-flex justify-content-around">
                <div className="col mb-3">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                        
                      }}
                      class="btn  btn-light  fw-bold  text-dark"
                      value={"00"}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      00
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light  fw-bold  text-dark"
                      value={"%"}
                      onClick={(e)=>{setValue(value+e.target.value)}}

                    >
                      %
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-warning fw-bold  text-dark"
                      onClick={backSpace}
                    >
                     c
                    </button>
                  </div>
                  <div className="col ">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-success fw-bold  text-light"
                      onClick={calculatorOff}
                    >
                      AC
                    </button>
                  </div>
                  <div className="col mb-3">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                        
                      }}
                      class="btn  btn-light  fw-bold  text-dark"
                      value={7}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      7
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light  fw-bold  text-dark"
                      value={8}
                      onClick={(e)=>{setValue(value+e.target.value)}}

                    >
                      8
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={9}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                     9
                    </button>
                  </div>
                  <div className="col ">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={'/'}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      /
                    </button>
                  </div>
                  <div className="col mb-3">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={4}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      4
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={5}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      5
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={6}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      6
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={'*'}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      *
                    </button>
                  </div>
                  <div className="col mb-3">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={1}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      1
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={2}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      2
                    </button>
                  </div><div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={3}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      3
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={'-'}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      -
                    </button>
                  </div>
                  <div className="col mb-3">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={0}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      0
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={','}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                      .
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-light fw-bold  text-dark"
                      value={'+'}
                      onClick={(e)=>{setValue(value+e.target.value)}}
                    >
                     +
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                      class="btn btn-warning fw-bold  text-dark"
                      onClick={evaluate}
                    >
                      =
                    </button>
                  </div>

                  
                </div>
              </div>
            </div>

  </div>
</div>



         
        </div>
      </div>
    </div>
  );
}

export default App;
