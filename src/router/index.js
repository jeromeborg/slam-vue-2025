import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import BooksListPage from '../views/BooksListPage.vue'
import BookDetailPage from '../views/BookDetailPage.vue'
import AuthorDetailPage from '../views/AuthorDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/books',
    name: 'BooksList',
    component: BooksListPage
  },
  {
    path: '/books/:id',
    name: 'BookDetail',
    component: BookDetailPage
  },
  {
    path: '/authors/:id',
    name: 'AuthorDetail',
    component: AuthorDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
