import Link from "next/link";

export default function Navbar() {
	return (
		<div className="relative z-10 w-screen py-6 px-4 lg:px-24 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100/20 flex items-center">
			<Link className="flex-grow" href="/"><h1 className="font-display font-black text-slate-200 text-2xl uppercase">Haus</h1></Link>
			<div className="flex-shrink flex items-center gap-6 lg:gap-12 font-display font-semibold text-sm">
				<Link href="https://github.com/RealityHaus" target="_blank">
					<button className="py-2 px-4 rounded-md transition delay-75 ease-in-out hover:bg-secondary tracking-wide">Github</button>
				</Link>
				{/* <Link href="" target="_blank">
					<button className="py-2.5 px-3.5 rounded-lg transition delay-75 ease-in-out hover:bg-secondary">Twitter</button>
				</Link>
				<Link href="" target="_blank">
					<button className="py-2.5 px-3.5 rounded-lg transition delay-75 ease-in-out hover:bg-secondary">Discord</button>
				</Link> */}
			</div>
		</div>
	)
}