import { Content } from './app/AppContent'
import { Farmacia, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'Farmacia',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'FARMACENTER',
    icon: 'Farmacia',
    exact: true,
    component: Farmacia
  },


    ]
  


export { routes, routese }