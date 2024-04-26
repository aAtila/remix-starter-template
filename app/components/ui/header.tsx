export function Header() {
	return (
		<header>
			<div className="flex items-center justify-between p-2 text-xs md:flex-row md:justify-between">
				<div className="text-center">
					<a href="/">
						Logo
						{/* <img
							src="/logo.svg"
							alt="Logo"
							className="h-10 w-auto"
						/> */}
					</a>
				</div>
			</div>
		</header>
	);
}
