import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-col w-full mt-20 mb-10'>
            <h1 className=' text-6xl lg:text-7xl mb-4 font-medium text-primary'>
              Hi! I'm Faruk,
            </h1>

            <p className='text-primary text-2xl lg:text-4xl w-5/6 mx-auto'>
              a software engineer focused on building accessible, beautiful
              interfaces.
            </p>

            <div className='flex flex-col w-full mt-20 mb-10'>
              <p className='text-primary text-xl lg:text-2xl'>
                Get in touch 👉 &nbsp;
                <a
                  href='mailto:faruqmansuri707@gmail.com'
                  className='text-accent-200 underline hover:text-accent-100'
                >
                  faruqmansuri707@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
