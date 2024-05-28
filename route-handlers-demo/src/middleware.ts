import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// changing cookies with middleware

	const response = NextResponse.next();

	const themePrefrence = request.cookies.get("theme");
	if (!themePrefrence) {
		response.cookies.set("theme", "dark");
	}

	//setting header----

	response.headers.set("custom-header", "custom-value");

	return response;

	//------------------###-----------------

	// conditional method

	// if (request.nextUrl.pathname === "/profile") {
	// 	return NextResponse.redirect(new URL("/hello", request.url));
	// }

	//---------------####------------
	return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
// 	matcher: "/profile",
// };
//mathcehr technique for redirecting to another routes using middleware.
