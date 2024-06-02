import { App } from '@/components/App/App'
import { LazyAbout } from '@/pages/about/About.lazy'
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '/admin/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
]

// это экспорт для роутинга внутри микрофронта admin
export const router = createBrowserRouter(routes)

// дефолтный экспорт нужен для построения роутинга через host-приложение (entry-point)
export default routes
