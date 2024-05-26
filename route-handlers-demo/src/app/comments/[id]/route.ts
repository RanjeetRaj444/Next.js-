import { comments } from "../data";
import { redirect } from "next/navigation";
//dynamic routes for finding particular product.
export async function GET(
	_request: Request,
	{
		params,
	}: {
		params: {
			id: string;
		};
	},
) {
	if (parseInt(params.id) > comments.length) {
		redirect("/comments");
	}
	const comment = comments.find(
		(comment) => comment.id === parseInt(params.id),
	);
	return Response.json(comment);
}
export async function PATCH(
	request: Request,
	{
		params,
	}: {
		params: {
			id: string;
		};
	},
) {
	const body = await request.json();
	const { text } = body;
	const comment = comments.findIndex(
		(comment) => comment.id === parseInt(params.id),
	);
	comments[comment].text = text;
	return Response.json(comments[comment]);
}
export async function DELETE(
	_request: Request,
	{
		params,
	}: {
		params: {
			id: string;
		};
	},
) {
	const comment = comments.findIndex(
		(comment) => comment.id === parseInt(params.id),
	);
	const deletedComment = comments[comment];
	comments.splice(comment, 1);
	return Response.json(deletedComment);
}
