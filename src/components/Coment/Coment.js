 
// import "./coment.css"
 
// import Header from "../header/Header"
// // import {tsParticles} from "tsparticles";
// import React from "react"
// import Icon from "../icon/icon"
 

// class Coment extends React.Component{

 
//   render() {

//  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    
      
//     return (
     
//         <>
        
//         <Header/>
        

//         <Icon />
  
     
  
//         </>
//       );
    
//     }
//   }
  
 
// export default  Coment;










 
import "./coment.css"
 
import Header from "../header/Header"
// import {tsParticles} from "tsparticles";
import React from "react"
import Icon from "../icon/icon"



 

function Todo({ todo, index, completeTodo, removeTodo,btn }) {
  return (
    <div
      className={btn}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p className="todo_p">
      {todo.text}
      </p >
  
      <div>
        <button className="Complete_button_todo " onClick={() => completeTodo(index)}>Complete</button>
        <button className="trash_button_todo" onClick={() => removeTodo(index)}><i className="fas fa-trash"></i></button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input_todo"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="buttom_add"><i className="fas fa-check"></i></button>
    </form>
     
  );
}
let res = JSON.parse(localStorage.getItem("todos"));

function Coment() {
  const [todos, setTodos] = React.useState(
    res
  );

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(newTodos + "   ---------- НЕ ТАК")
     localStorage.setItem("todos", JSON.stringify(newTodos))
     GetTodos(newTodos )
 
  };
 
// console.log(Todo())
  // let btnClass = 'btn';
  const completeTodo = index => {
    
    const newTodos = [...todos];
 
    if(newTodos[index].isCompleted === false){
      newTodos[index].isCompleted = true
      
      setTodos(newTodos);
      completeTodoL(index, newTodos) 
          console.log( "     completeTodo----true")
    } else{
      newTodos[index].isCompleted = false
      setTodos(newTodos);
      
      completeTodoL(index, newTodos) 
      console.log("     completeTodo2-----false")
    }

  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    removeLocalTodos(index, newTodos)
  };

  function removeLocalTodos(i,nt) {
   console.log(i + "removeLocalTodos")
   console.log(nt + "removeLocalTodos")
   localStorage.setItem("todos", JSON.stringify(nt));
  }


  function completeTodoL(i,nt) {
    console.log(i)
    console.log(nt+"completeTodoL")
    
    localStorage.setItem("todos", JSON.stringify(nt));
   }


  function GetTodos() {
 
 let res = JSON.parse(localStorage.getItem("todos"));
 console.log(res + "------todos-------");
  return(
    <div >
        {res.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            btn={todo.isCompleted ? "del" : " "}
          />
        ))}
    
         
      </div>
    
  )
}

  return (
    <div className="todo_block">
    <Header/>
    <div className="app">
      <div className="todo-list">
      < GetTodos/>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    <Icon />
    </div>
  );
}

export default Coment

 







  
// //Select DOM
// const todoInput = document.querySelector(".todo-input");
// // const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// // const filterOption = document.querySelector(".filter-todo");
// //Event Listeners
// // todoButton.addEventListener("click", addTodo);
// // todoList.addEventListener("click", deleteTodo);
// // filterOption.addEventListener("click", filterTodo);
// //Functions
// function addTodo(e) {
//   //Prevent natural behaviour
//   e.preventDefault();
//   //Create todo div
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //Create list
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   //Save to local - do this last
//   //Save to local

//   saveLocalTodos(todoInput.value);
 
//   //
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   todoInput.value = "";
//   //Create Completed Button
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//   completedButton.classList.add("complete-btn");
//   completedButton.onclick = function(){
//     deleteTodo(this);
//   }
//   todoDiv.appendChild(completedButton);
//   //Create trash button
//   const trashButton =  document.createElement("div");
//   trashButton.innerHTML = `<button  > <i class="fas fa-trash"></i></button>`;
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);
 
//   //attach final Todo
//   todoList.appendChild(todoDiv);
  
 
 
//   trashButton.onclick = function(){
//     deleteTodo(this);
//   }
// }
 
// ///////////////////////////////////////////////////////////////////////////////////////////////////

//   function deleteTodo(e) {
   
//  console.log(e);
//   if (e.classList[0] === "trash-btn") {
//     e.parentElement.remove();
//     const todo = e.parentElement;
//     todo.classList.add("fall");
//     //at the end
//     removeLocalTodos(todo);
//     todo.addEventListener("transitionend", e => {
//       todo.remove();
//     });
//   }
//   if (e.classList[0] === "complete-btn") {
//     const todo = e.parentElement;
//     todo.classList.toggle("completed");
//     console.log(todo);
//     console.log('ok');
//   }
// }


// /////////////////////////////////////////////////////////////////////////////////////////

// function filterTodo(e) {
//   console.log(e.target.value);
//   const todos = todoList.childNodes;
//   todos.forEach(function(todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//    });
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(localStorage);
// console.log(JSON.parse(localStorage.getItem("todos")));
 


// function saveLocalTodos(todo) {
//   console.log(todo + "gggg");
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function removeLocalTodos(todo) {
//   let todos;
//   console.log(todo + "gggg666");
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////


 
// // if(window.location.href === 'http://localhost:3000/coment'){
// //   console.log("window.location");
// //   getTodos()
// // }

 
// getTodos()
// // }
// function getTodos(e) {
  
//   console.log("ok")
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function(todo) {
//     //Create todo div
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //Create list
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     // todoInput.value = "";
//     //Create Completed Button
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     completedButton.onclick = function(){
//       deleteTodo(this);
//     }
//     //Create trash button
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);
//     //attach final Todo
//     todoList.appendChild(todoDiv);
//     trashButton.onclick = function(){
//       deleteTodo(this);
//     }
//   });
// }
 




  // tsParticles.load("tsparticles", {
  //   fpsLimit: 60,
  //   particles: {
  //     number: {
  //       value: 80,
  //       density: {
  //         enable: true,
  //         value_area: 900
  //       }
  //     },
  //     color: {
       
  //       animation: {
  //         enable: true,
  //         speed: 1,
  //         sync: true
  //       }
  //     },
  //     shape: {
  //       type: "circle",
  //       stroke: {
  //         width: 0,
  //         color: "#000000"
  //       },
  //       polygon: {
  //         nb_sides: 5
  //       },
  //       image: {
           
  //         width: 100,
  //         height: 100
  //       }
  //     },
  //     opacity: {
  //       value: 0.5,
  //       random: false,
  //       anim: {
  //         enable: false,
  //         speed: 1,
  //         opacity_min: 0.1,
  //         sync: false
  //       }
  //     },
  //     size: {
  //       value: 3,
  //       random: true,
  //       anim: {
  //         enable: false,
  //         speed: 2,
  //         size_min: 0.1,
  //         sync: false
  //       }
  //     },
  //     line_linked: {
  //       enable: true,
  //       distance: 130,
  //       color: "random",
  //       opacity: 0.4,
  //       width: 1,
  //       triangles: {
  //         enable: true,
  //         color: "rgb(179, 121, 255)",
  //         opacity: 0.1
  //       }
  //     },
  //     move: {
  //       enable: true,
  //       speed: 1,
  //       direction: "none",
  //       random: false,
  //       straight: false,
  //       out_mode: "out",
  //       attract: {
  //         enable: false,
  //         rotateX: 600,
  //         rotateY: 1200
  //       }
  //     }
  //   },
  //   interactivity: {
  //     detect_on: "canvas",
  //     events: {
  //       onhover: {
  //         enable: true,
         
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: "push"
  //       },
  //       resize: true
  //     },
  //     modes: {
  //       grab: {
  //         distance: 400,
  //         line_linked: {
  //           opacity: 1
  //         }
  //       },
  //       bubble: {
  //         distance: 400,
  //         size: 40,
  //         duration: 2,
  //         opacity: 0.8,
  //         speed: 3
  //       },
  //       repulse: {
  //         distance: 200
  //       },
  //       push: {
  //         particles_nb: 4
  //       },
  //       remove: {
  //         particles_nb: 2
  //       }
  //     }
  //   },
  //   retina_detect: true,
  //   background: {
  //     color: "rgb(37, 26, 41)",
  //     image: "",
  //     position: "50% 50%",
  //     repeat: "no-repeat",
  //     size: "cover"
  //   }
  // });
 