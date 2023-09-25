import {} from 'react'
import { FaBeer } from 'react-icons/fa';
import styles from '../css/Rodape.modules.css'



function Ropade (){
  return(
    <>
      <div className={styles.rodape}>
        <section>
          <h3 className={styles.h3}>@2023-todos os direitos reservados</h3>
          <FaBeer className='Fa'/>
        </section>
      </div>
    </>
  )
   

}
export default Ropade