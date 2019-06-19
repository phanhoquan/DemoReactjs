const user = [
	{
		id: 1,
		username: "quan",
		password: "123456"
	},
	{
		id: 2,
		username: "hoquan",
		password: "1234567"
	}
]

export async function getUser(userInfo) {
	let dataAuth = JSON.stringify(user);
		dataAuth = JSON.parse(dataAuth);
	dataAuth = dataAuth.filter(item => item.username === userInfo.username && item.password === userInfo.password);

	return dataAuth;
}