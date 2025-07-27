const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container px-5 py-5 mx-auto text-center lg:px-40'>
        <div className='text-base'>
          <h3>
            Build with &nbsp;
            <a
              href='https://react.dev/'
              className='text-accent-200 hover:text-accent-100'
              target='_blank'
              rel='noopener noreferrer'
            >
              React
            </a>
            &nbsp; and &nbsp;
            <a
              href='https://tailwindcss.com/'
              className='text-accent-200 hover:text-accent-100'
              target='_blank'
              rel='noopener noreferrer'
            >
              Tailwind CSS
            </a>
          </h3>
          <h3>© Faruk Mansuri {new Date().getFullYear()}</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
