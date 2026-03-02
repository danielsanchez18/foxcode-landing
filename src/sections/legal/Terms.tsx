export default function Terms() {
    return (
        <main 
            id="terminos" 
            className="w-full bg-black/50 p-6 rounded-xl flex flex-col gap-y-5 mx-auto max-lg:px-5"
        >
            <div className="mb-5">
                <h1 className="text-xl font-medium">Términos y Condiciones</h1>
                <p className="text-neutral-300 text-sm">
                    Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones.
                    Te recomendamos leerlos cuidadosamente antes de utilizar nuestros servicios.
                </p>
            </div>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">1. Aceptación de los Términos</h2>
                <p className="text-neutral-300 text-sm">
                    Al acceder, navegar o utilizar este sitio web, confirmas que has leído,
                    entendido y aceptado estos Términos y Condiciones. Si no estás de acuerdo,
                    debes abstenerte de utilizar nuestros servicios.
                </p>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">2. Uso del Sitio</h2>
                <p className="text-neutral-300 text-sm">
                    El usuario se compromete a utilizar el sitio web de manera responsable y conforme a la ley.
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>No realizar actividades ilícitas o fraudulentas.</li>
                    <li>No intentar acceder sin autorización a sistemas o bases de datos.</li>
                    <li>No distribuir virus, malware o cualquier código dañino.</li>
                    <li>No utilizar el contenido con fines comerciales sin autorización previa.</li>
                </ol>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">3. Propiedad Intelectual</h2>
                <p className="text-neutral-300 text-sm">
                    Todo el contenido del sitio, incluyendo textos, diseños, logotipos, código,
                    gráficos y otros materiales, es propiedad de FoxCode o cuenta con las
                    licencias correspondientes.
                </p>

                <p className="text-neutral-300 text-sm">
                    Queda estrictamente prohibida la reproducción, distribución o modificación
                    del contenido sin autorización expresa.
                </p>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">4. Limitación de Responsabilidad</h2>
                <p className="text-neutral-300 text-sm">
                    No garantizamos que el sitio esté libre de errores o interrupciones.
                    En ningún caso seremos responsables por:
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>Daños directos o indirectos derivados del uso del sitio.</li>
                    <li>Pérdida de datos o beneficios.</li>
                    <li>Interrupciones del servicio por causas técnicas.</li>
                    <li>Acciones de terceros que afecten el funcionamiento del sitio.</li>
                </ol>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">5. Enlaces a Terceros</h2>
                <p className="text-neutral-300 text-sm">
                    Nuestro sitio puede contener enlaces a sitios web externos. No tenemos control
                    sobre el contenido o las políticas de privacidad de dichos sitios,
                    por lo que no asumimos responsabilidad alguna por ellos.
                </p>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">6. Modificaciones</h2>
                <p className="text-neutral-300 text-sm">
                    Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
                    Las modificaciones entrarán en vigor una vez publicadas en esta página.
                    Es responsabilidad del usuario revisar periódicamente esta sección.
                </p>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">7. Terminación</h2>
                <p className="text-neutral-300 text-sm">
                    Podemos suspender o cancelar el acceso al sitio sin previo aviso si el usuario
                    incumple estos términos o realiza actividades que perjudiquen el funcionamiento del servicio.
                </p>
            </section>

            <section className="grid gap-y-2">
                <h2 className="text-white font-semibold">8. Contacto</h2>
                <p className="text-neutral-300 text-sm">
                    Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos en:
                    <span className="text-primary hover:underline font-semibold">
                        <a href="mailto:contacto@foxcode.com"> contacto@foxcode.com</a>
                    </span>
                </p>


                <p className="text-neutral-400 text-xs mt-2">
                    Última actualización: {new Date().getFullYear()}
                </p>
            </section>
        </main>
    );
}