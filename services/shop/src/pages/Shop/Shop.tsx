import { shopRoutes } from '@packages/shared/src/routes/shop'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
      <h2>Main Shop page</h2>
      <div>
        <Link to={shopRoutes.second}>Go to Second Page</Link>
      </div>
    </>
  )
}

export default Shop
