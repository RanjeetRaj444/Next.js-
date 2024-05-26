import { type NextRequest } from "next/server"; // for accessing headers for requests.
import { headers, cookies } from "next/headers"; // for accessing headers, cookies for requests.
export async function GET(request: NextRequest) {
	// const requestHeaders = new Headers(request.headers); //Accessing headers for requests.
	// const headerList = headers(); //Accessing headers for requests.

	cookies().set("resultsPerPage", "20"); //setting cookies by another ways
	console.log(cookies().get("resultsPerPage")); //getting cookies

	// const them = request.cookies.get("theme");//accessing cookies
	// console.log(them);

	// console.log(requestHeaders.get("Authorization"));

	// console.log(headerList.get("Authorization")); //Accessing headers for requests.

	// return new Response("Profile API data!");
	return new Response("<h1>Profile API data!</h1>", {
		headers: {
			"Content-Type": "text/html",
			"Set-Cookie": "theme=dark",
		},
	}); //Manipulating Headers and sending cookies.
}
