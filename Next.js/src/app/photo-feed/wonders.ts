import { StaticImageData } from "next/image";

import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.webp";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";

export type WonderImage = {
	id: string;
	name: string;
	src: StaticImageData;
	photographer: string;
	location: string;
};

const wondersImages: WonderImage[] = [
	{
		id: "1",
		name: "The Great Wall of China",
		src: photo1,
		photographer: "Jiayu Zhang",
		location: "China",
	},
	{
		id: "2",
		name: "The Colosseum",
		src: photo2,
		photographer: "Jiayu Zhang",
		location: "Italy",
	},
	{
		id: "3",
		name: "The Eiffel Tower",
		src: photo3,
		photographer: "Jiayu Zhang",
		location: "France",
	},
	{
		id: "4",
		name: "The Statue of Liberty",
		src: photo4,
		photographer: "Jiayu Zhang",
		location: "United States",
	},
	{
		id: "5",
		name: "The Taj Mahal",
		src: photo5,
		photographer: "Jiayu Zhang",
		location: "India",
	},
];

export default wondersImages;
