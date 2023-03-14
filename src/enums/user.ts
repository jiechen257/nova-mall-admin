export const genderType: Record<string, { color: string; label: string }> = {
	1: {
		color: "blue",
		label: "男"
	},
	0: {
		color: "volcano",
		label: "女"
	}
};

export const userLevelMap: Record<string, { role: string; desc: string }> = {
	1: {
		role: "超级管理员",
		desc: "所有模块的权限"
	},
	2: {
		role: "商城管理员",
		desc: "只有商城模块的权限"
	},
	3: {
		role: "普通用户",
		desc: "只有查询权限"
	}
};
