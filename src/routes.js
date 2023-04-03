import {
	getAllNotesHandler,
	addNoteHandler,
	getNoteByIdHandler,
	editNoteByIdHandler,
	deleteNoteByIdHandler,
} from "./handler";

const routes = [
	{
		method: "GET",
		path: "/notes",
		handler: getAllNotesHandler,
	},
	{
		method: "POST",
		path: "/notes",
		handler: addNoteHandler,
	},
	{
		method: "GET",
		path: "/notes/{id}",
		handler: getNoteByIdHandler,
	},
	{
		method: "PUT",
		path: "/notes/{id}",
		handler: editNoteByIdHandler,
	},
	{
		method: "DELETE",
		path: "/notes/{id}",
		handler: deleteNoteByIdHandler,
	},
];

export default routes;
