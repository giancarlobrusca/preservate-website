const Donations = () => {
	return (
		<div className="container flex flex-col flex-wrap items-center p-10 mb-20 text-center md:py-24 bg-yellow-50">
			<h2 className="mb-2 text-2xl font-medium text-gray-900 lg:text-5xl title-font">¡Doná ahora y sé parte</h2>
			<h2 className="mb-2 text-2xl font-medium text-gray-900 lg:-mt-6 lg:text-5xl title-font">de la Comunidad Preservate!</h2>
			
			<p className="w-full font-light text-gray-500 text-md lg:text-3xl md:w-1/2">Para sostener y potenciar el impacto de nuestro trabajo, abrimos los brazos a quien quiera sumarse a la
				Comunidad Preservate a partir de una donación mensual o puntual.
			</p>
			<a
				target="_blank"
				href="https://donaronline.org/asociacion-civil-preservate/sumate-a-la-comunidad-preservate"
				className="inline-flex items-center px-4 py-1 mt-4 text-base font-medium text-white bg-black shadow-sm md:mt-8 md:px-6 md:py-3 md:text-2xl hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
				>
				MAS INFO ➜
			</a>
		</div>
	);
};

export default Donations;