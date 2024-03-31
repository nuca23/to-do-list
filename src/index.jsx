import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";

function App() {
    const [value,setValue] = useState(" ");
    const [tasks,setTasks] = useState([]);
    const submitForm = (event) => {
        event.preventDefault();
        setTasks([... tasks,value]);
        event.target.reset();
    }
    const remove = (index) => {
     const masivi = [...tasks];
     masivi.splice(index, 1 );
     setTasks([masivi])

    }
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <div className="card">
                            <div className="card-header">
                                <form method="POST" onSubmit={(event)=> submitForm(event)}>
                                   <input type="text" className="form-control" placeholder="მიუთითეთ დავალება" onChange={(event) =>
                                setValue(event.target.value)}/>
                                
                               </form>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    {
                                        tasks.map((item,index) => <li className="mb-3  border-bottom d-flex justify-content-between" key={index}><span contentEditable="true">{item}</span>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>remove(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button></li>)
                                    }

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
        </React.Fragment>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);