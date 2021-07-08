import { Link } from 'react-router-dom'

const notFound404 = () => {
  return (
    <div className='container' style={{ textAlign: 'center' }}>
      <div className='jumbotron'>
        <h1 className='display-3'>404 Page Not Found</h1>
        <p className='lead'>Welcome to the Blog Wonderland</p>
        <hr className='my-4' />
        <p>The beginning of all things wonderful!</p>
        <p className='lead'>
          <Link
            to='/'
            className='btn btn-primary btn-lg'
            href='/'
            role='button'
          >
            Go to Home
          </Link>
        </p>
      </div>
    </div>
  )
}

export default notFound404
