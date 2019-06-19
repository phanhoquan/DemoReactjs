
const list =[
	{
		id: 1,
		name: "A The Bloody Chamber and Other Stories",
		author: "Angela Carter 1",
	},
	{
		id: 2,
		name: "B The Bloody Stories",
		author: "Angela Carter 2",
	},
	{
		id: 3,
		name: "C The Bloody and Other Stories",
		author: "Angela Carter 3",
	},
	{
		id: 4,
		name: "D The Bloody Chamberther Stories",
		author: "Angela Carter 4",
	},
	{
		id: 5,
		name: "E The Bloody Chamber and Stories",
		author: "Angela Carter 5",
	},
	{
		id: 6,
		name: "F The Bloody Chamber  Stories",
		author: "Angela Carter 6",
	},
	{
		id: 7,
		name: "G The Bloody Chamber and OStories",
		author: "Angela Carter 7",
	},
	{
		id: 8,
		name: "H The Bloody Chamber and ",
		author: "Angela Carter 8",
	},
	{
		id: 9,
		name: "I The Bloody Chamber and Other Stories",
		author: "Angela Carter 9",
	},
	{
		id: 10,
		name: "J The Bloody Chamber and Other Stories",
		author: "Angela Carter 10",
	},
	{
		id: 11,
		name: "K The Bloody Chamber and Other Stories",
		author: "Angela Carter 11",
	},
	{
		id: 12,
		name: "X The Bloody Chamber and Other Stories",
		author: "Angela Carter 12",
	},
	{
		id: 13,
		name: "Y The Bloody Chamber and Other Stories",
		author: "Angela Carter 13",
	},
	{
		id: 14,
		name: "X The Bloody Chamber and Other Stories",
		author: "Angela Carter 14",
	},
	{
		id: 15,
		name: "The Bloody Chamber and Other Stories",
		author: "Angela Carter 15",
	},
	{
		id: 16,
		name: "The Bloody Stories",
		author: "Angela Carter 16",
	},
	{
		id: 17,
		name: "The",
		author: "Angela Carter 17",
	},
	{
		id: 18,
		name: "The",
		author: "Angela Carter 18",
	},
]

export function getListbook(page, limit) {
	var listBook = list;
	if (!page || !limit) {
		page = 1;
		limit = 5;
	}
	return {
		data: listBook.slice((page - 1) * limit, page * limit),
		totalPage: listBook.length
	};
}

export function update(id, name, author){
	var data = list;
	var index = data.findIndex((obj => obj.id === parseInt(id)));
	data[index] = { id:parseInt(id), name: name, author: author }
	return data;
}

export function deleteBook(id){
	var data = list;
	var index = data.findIndex((obj => obj.id === parseInt(id)));
	
	data.splice(parseInt(index), 1);
	return data;
}

export function editBook(id){
	var data = list;
		data = data.filter(item => (item.id === parseInt(id)));
	return data[0];
}

export function sortBy(page, limit){

	if (!page || !limit) {
		page = 1;
		limit = 5;
	}
	var data = list;
	
	var sortBy = data.sort(() => -1);
	return {
		data: sortBy.slice((page - 1) * limit, page * limit),
		totalPage: data.length,
	};
}

export function searchData(text, page, limit){
	if (!page || !limit) {
		page = 1;
		limit = 5;
	}

	var data = list;
	var value = text.toLowerCase().trim();
	data = data.filter(item => item.name.toLowerCase().includes(value));

	return {
		data: data.slice((page - 1) * limit, page * limit),
		totalPage: data.length,
	};
}


export function AddNewData(text){
	var data = list;
	var idMax = Math.max(...data.map(id => id.id)) + 1;
	var txt = {id: idMax, name: text.name, author: text.author};
	data.push(txt);
	return data;
}