/** When your routing table is too long, you can split it into small modules **/

const notFoundRouter = {
  path: '/404',
  name: 'page404',
  component: () => import('@/views/error-page/page404.vue'),
  hidden: true,
}

export default notFoundRouter