import Image from "next/image";
import "../styles/globals.css";

export default function Header() {
	const navItems = [
		{ name: "HOME", href: "/" },
		{ name: "PRAZER SOFTMIG", href: "/sobre" },
		{ name: "O QUE FAZEMOS", href: "/servicos" },
		{ name: "HISTÓRIAS DE SUCESSO", href: "/cases" },
		{ name: "FALE COM A GENTE", href: "/contato" },
	];

	return (
		<div className="flex justify-between items-center py-4 px-10 bg-white shadow-lg shadow-gray-100">
			<div>
				<Image
					src={"/logo-softmig.png"}
					alt="Logo Softmig"
					width={100}
					height={100}
					className="w-12 cursor-pointer hover:scale-110 transition"
				></Image>
			</div>
			<div>
				<ul className="flex gap-4">
					{navItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								className="navlink font-semibold text-sm text-gray-700 hover:text-blue-600 transition"
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div>
				<button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition">
					Botão
				</button>
			</div>
		</div>
	);
}
