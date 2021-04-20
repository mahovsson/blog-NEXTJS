import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/matus.jpg"
          alt="An image showing Matus"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Matúš</h1>
      <p>
        I blog about web development and my journey to become web developer.
        Currently trying to grasp React.
      </p>
    </section>
  );
}

export default Hero;
