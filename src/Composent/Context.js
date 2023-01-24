import React,{useContext} from 'react';
import{tdd} from "./FormTak";
import Task from './Task';
import './style.css'

export default function Context() {
    const{
        tasks,
        settasks,
        task,
        settask,
        addtask,
        deletetask,
        donecomplete
    }=useContext(tdd);
  return (
    <div>
       <div className="row justify-content-center">
<div className='mt-5 py-3 col-8 c3' style={{backgroundColor:'whitesmoke'}}>
      <h1 >TO DO LIST APP</h1>
      <h6>CHOSE A FAIRE</h6>
      <br />
      <form action="">
        
     <input type="text" placeholder='ENTREZ UNE TACHE:' value={task} onChange={(e)=>{settask(e.target.value)}}  className='form-control inp' />
       <input type="button" onClick={addtask} className='buttonn ' value="AJOUTER" />

      </form>
      <br /><br />
      <h2>LISTES DES CHOSES A FAIRE</h2>
      <br />
     <ul>
        {
            tasks.map((t)=>{
                return <li><Task delf={(idp)=>{deletetask(t.id)}} key={t.id} txt={t.nom}  donecomplete = {() => donecomplete(t.id)} done={t.done}/></li> 

            })
        }
     </ul>
     </div>
     </div>
    </div>
  )
}
