import styles from './img.module.css';
// import logo from '../../assets/R.png'
function Img({logo}) {
  // console.log('img')
  return (
    <p>
    <img className={styles.logo} src={logo} alt="RD logo " />
  </p>
  )
}

export default Img