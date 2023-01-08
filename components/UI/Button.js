import Link from 'next/link'
import classes from './buttonStyles.module.css'

const Button = ({ link, children, onCLick }) => {


  if (link) {
    return (
      <Link href={link}>
        <p className={classes.btn}>
          {children}
        </p>
      </Link>
    )
  }

  return <button className={classes.btn} onClick={onCLick}>{children}</button>
}

export default Button