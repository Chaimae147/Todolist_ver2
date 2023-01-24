import {useState,createContext} from 'react'
import './style.css'
import{v4 as uuidv4} from 'uuid';
export const tdd =createContext();

export default function FormTak({children}) {
    const[tasks,settasks]=useState([
        {id:uuidv4(), nom :'SPORT' ,done:false},
        {id:uuidv4(), nom :'MOVIE' ,done:false},
        {id:uuidv4(), nom :'STUDY' ,done:false}

    ]);
    const [task,settask]=useState('');
    const addtask=()=>{
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=uuidv4();
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        settask('');
    };
    const deletetask=(idp)=>{
        let ntasks=tasks.filter((t)=>{
            return t.id!=idp
        })
        settasks(ntasks); 
    }
  
    const donecomplete=(id)=>{
        settasks(tasks.map(task => task.id===id ? {id:task.id,nom:task.nom,done:true} : task ))
    }
  
  return (
 
    <tdd.Provider value={{tasks, settasks, task, settask, addtask, deletetask, donecomplete}}>
    {children}
</tdd.Provider>

  )
}
