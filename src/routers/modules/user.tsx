import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 超级表格模块
const userListRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "超级表格"
		},
		children: [
			{
				path: "/user/userList",
				element: lazyLoad(React.lazy(() => import("@/views/user/userList/index"))),
				meta: {
					requiresAuth: true,
					title: "客户",
					key: "userList"
				}
			}
		]
	}
];

export default userListRouter;
