
import Input from './Input';
import styles from './createTask.module.css';
import HowImportentSection from './HowImportentSection';
import { options,category } from '../../utils/constant';
import Button from './Button';
import { todoContext } from './TodoContenxt';
import { useContext } from 'react';
// import { object } from 'prop-types';
// import { Handshake } from '@mui/icons-material';
function Form() {


    const {handleSubmit,handleCancle}= useContext(todoContext);

    const submit = (event)=>{
event.preventDefault();
const formData = new FormData(event.target);
const formValues = Object.fromEntries(formData.entries());
handleSubmit(event,formValues);

    }
    // function handleCancle(event){
    //     event.preventDefault();

    // }
  return (
    <form  className={styles.form} onSubmit={submit} >
      {/* <input type="text" label=/> */}
      <Input type={'text'} label={'Task'}/>
      <Input textArea={true} label={'Description'}/>
      <Input type={'date'} label={'Acomplish Date'}/>
      <Input type={'time'} label={'Time'}/>
      {/* <Input type={'color'} label={'Choose Color'}/>
       */}
        <HowImportentSection label={'priority-select'} options={options}/>
        <HowImportentSection label={'Category'} options={category}/>

        <div className={styles.sub_btn_parent}>

 {/* <button className={styles.cancle_btn}   onClick={handleCancle}>Submit</button> */}
<Button >Submit</Button>
<Button handleFunction = {handleCancle}>Cancle</Button>

        </div>
      </form>
  )
}

export default Form