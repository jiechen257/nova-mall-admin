import { Space, Switch, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { genderType, userLevelMap } from "@/enums/user";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import userListJSON from "../../../../mock/modules/user/userList.json";

interface DataType {
	id: string;
	username: string;
	avatar: string;
	mobile: string;
	gender: number;
	age: number;
	userLevel: number;
}

const columns: ColumnsType<DataType> = [
	{
		title: "用户ID",
		dataIndex: "id",
		key: "id"
	},
	{
		title: "用户名称",
		dataIndex: "username",
		key: "username"
	},
	{
		title: "用户头像",
		dataIndex: "avatar",
		key: "avatar"
	},
	{
		title: "手机号码",
		dataIndex: "mobile",
		key: "mobile"
	},
	{
		title: "性别",
		key: "gender",
		dataIndex: "gender",
		render: (_, { gender }) => {
			const { color, label } = genderType[gender];
			return <Tag color={color}>{label}</Tag>;
		}
	},
	{
		title: "用户等级",
		key: "userLevel",
		dataIndex: "userLevel",
		render: (_, { userLevel }) => {
			const { role } = userLevelMap[userLevel];
			return <Tag color={"blue"}>{role}</Tag>;
		}
	},
	{
		title: "Action",
		key: "action",
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		render: (_, nickname) => (
			<Space size="middle">
				{/*<Button>Invite {nickname}</Button>*/}
				<a onClick={() => alert("按钮被点击")}>Delete</a>
			</Space>
		)
	}
];

// const data: any = userListJSON.data.list;
const data: any = [];
for (let i = 0; i < 100; i++) {
	data.push({
		id: i,
		username: "user123",
		password: "$2a$10$lTu9qi0hr19OC800Db.eludFr0AXuJUSrMHi/iPYhKRlPFeqJxlye",
		gender: i % 2 === 0 ? 1 : 0,
		lastLoginTime: "2019-04-20 22:17:43",
		lastLoginIp: "0:0:0:0:0:0:0:1",
		userLevel: (i % 2) + 1,
		nickname: "user123",
		mobile: "123-1234-1233",
		avatar: "",
		weixinOpenid: "",
		sessionKey: "",
		status: 0,
		addTime: "2019-04-20 22:17:43",
		updateTime: "2019-04-20 22:17:43",
		deleted: false
	});
}

const UserList = () => {
	const [fixedTop, setFixedTop] = useState(false);

	return (
		<div className="card content-box">
			<Table
				columns={columns}
				dataSource={data}
				scroll={{ x: 1500 }}
				summary={() => (
					<Table.Summary fixed={fixedTop ? "top" : "bottom"}>
						<Table.Summary.Row>
							<Table.Summary.Cell index={0} colSpan={2}>
								<Switch
									checkedChildren="Fixed Top"
									unCheckedChildren="Fixed Top"
									checked={fixedTop}
									onChange={() => {
										setFixedTop(!fixedTop);
									}}
								/>
							</Table.Summary.Cell>
							<Table.Summary.Cell index={2} colSpan={8}>
								Scroll Context
							</Table.Summary.Cell>
							<Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
						</Table.Summary.Row>
					</Table.Summary>
				)}
				sticky
			/>
		</div>
	);
};

export default UserList;
