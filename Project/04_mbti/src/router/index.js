import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Test from "../views/test"

const updateRouteLayout = async meta => {
	//해당 부분에서 store 업데이트해주기
}

const fnBeforeEnter = (to,from,next) => {

}

const routes = [
	{
		path : "/",
		name : "Home",
		component : Home,
	},
	{
		path : "/test",
		name : "TestIndex",
		component : Test,
		meta: {
			titleName: 'TestIndex',
			isHeader: false,
			isBack: false,
			isNav: false,
			isFooter: false,
		},
	},
];

const router = createRouter({
	history : createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { left: 0, top: 0 }
	}
});

router.beforeEach(async (to, from, next) => {
	let meta = to.meta
	await updateRouteLayout(meta)
	window.routeQuery = to.query
	window.path = to.path
	next()
})

export default router;
