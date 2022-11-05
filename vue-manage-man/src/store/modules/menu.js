import Cookie from "js-cookie";

export default {
    namespaced: true,
    state: {
        menu: []
    },
    mutations: {
        // 动态 menu 数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) {
            // 判断
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            // console.log(menu)
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(chi => {
                        chi.component = () => import(`@/views/${chi.url}`)
                        return chi
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`@/views/${item.url}`)
                    menuArray.push(item)
                }
            })
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    },
}