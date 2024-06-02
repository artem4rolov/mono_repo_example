import { Suspense } from 'react'
import { Link, createBrowserRouter } from 'react-router-dom'

import { App } from '@/components/App/App'
import { Shop } from '@/pages/Shop'

import { UserCard } from '@packages/shared/src/components/UserCard'
import { shopRoutes } from '@packages/shared/src/routes/shop'

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={'Loading...'}>
            <div style={{ color: 'red' }}>
              <h1>second page</h1>
              <UserCard username="artem4rolov from SHOP MODULE" />
              <Link to={shopRoutes.main}>Go to Main Shop Page</Link>
            </div>
          </Suspense>
        ),
      },
    ],
  },
]

// это экспорт для роутинга внутри микрофронта shop
export const router = createBrowserRouter(routes)

// дефолтный экспорт нужен для построения роутинга через host-приложение (entry-point)
export default routes
