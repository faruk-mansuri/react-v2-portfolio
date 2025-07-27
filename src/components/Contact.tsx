import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id='contact' className='text-secondary bg-primary py-10'>
      <div className='container px-2 py-10 w-5/6 mx-auto text-center lg:px-40'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-medium title-font mb-4 text-secondary'>
            Let&lsquo;s Work Together
          </h2>
          <p className='text-lg '>
            I&lsquo;m always interested in work that contributes to
            sustainability, equity, or education.
          </p>
          <p className='text-lg'>
            Email me at &nbsp;
            <a
              href='mailto:faruqmansuri707@gmail.com'
              className='text-accent-100 underline hover:text-accent-200'
            >
              faruqmansuri707@gmail.com
            </a>
            &nbsp; or drop me a message on &nbsp;
            <a
              href='https://www.linkedin.com/in/faruk-mansuri-5900a1272/'
              className='text-accent-100 underline hover:text-accent-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            !
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
