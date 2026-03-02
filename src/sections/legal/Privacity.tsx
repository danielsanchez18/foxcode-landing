export default function Privacity() {
    return (
        <main 
            id="privacidad" 
            className="w-full bg-black/50 p-6 rounded-xl flex flex-col gap-y-5 mx-auto max-lg:px-5"
        >
            <div className="mb-5">
                <h1 className="text-xl font-medium">Política de Privacidad</h1>
                <p className="text-neutral-300 text-sm">
                    En FoxCode valoramos tu privacidad y nos comprometemos a proteger tus datos personales.
                    Esta política explica qué información recopilamos, cómo la usamos y cuáles son tus derechos.
                </p>
            </div>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">1. Información que Recopilamos</h2>
                <p className="text-neutral-300 text-sm">
                    Recopilamos diferentes tipos de información cuando interactúas con nuestro sitio web o servicios.
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>
                        <strong>Información personal:</strong> Nombre completo, dirección de correo electrónico,
                        número de teléfono y cualquier otro dato que proporciones voluntariamente.
                    </li>
                    <li>
                        <strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo
                        y datos de uso mediante cookies o tecnologías similares.
                    </li>
                    <li>
                        <strong>Información de comunicación:</strong> Mensajes enviados a través de formularios
                        de contacto, soporte o suscripciones.
                    </li>
                </ol>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">2. Cómo Usamos tu Información</h2>
                <p className="text-neutral-300 text-sm">
                    Utilizamos la información recopilada para ofrecer y mejorar nuestros servicios,
                    garantizar la seguridad del sitio y mantener una comunicación efectiva contigo.
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>Brindar soporte y responder consultas.</li>
                    <li>Mejorar la experiencia del usuario y optimizar el rendimiento del sitio.</li>
                    <li>Enviar actualizaciones, noticias o información relevante (si has dado tu consentimiento).</li>
                    <li>Cumplir con obligaciones legales y regulatorias.</li>
                </ol>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">3. Protección de Datos</h2>
                <p className="text-neutral-300 text-sm">
                    Implementamos medidas técnicas y organizativas apropiadas para proteger tu información
                    contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>Uso de conexiones seguras (HTTPS).</li>
                    <li>Restricción de acceso a datos personales.</li>
                    <li>Monitoreo y actualización constante de sistemas de seguridad.</li>
                    <li>Almacenamiento seguro de la información.</li>
                </ol>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">4. Tus Derechos</h2>
                <p className="text-neutral-300 text-sm">
                    Como usuario, tienes control sobre tus datos personales y puedes ejercer los siguientes derechos:
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>Acceder a los datos personales que tenemos sobre ti.</li>
                    <li>Solicitar la corrección de información inexacta.</li>
                    <li>Solicitar la eliminación de tus datos personales.</li>
                    <li>Retirar tu consentimiento en cualquier momento.</li>
                    <li>Solicitar la limitación u oposición al tratamiento de tus datos.</li>
                </ol>
            </section>

            <section className="grid gap-y-3">
                <h2 className="text-white font-semibold">5. Uso de Cookies</h2>
                <p className="text-neutral-300 text-sm">
                    Nuestro sitio puede utilizar cookies para mejorar la experiencia de navegación.
                    Las cookies nos permiten recordar tus preferencias y analizar el tráfico del sitio.
                </p>

                <ol className="list-decimal list-inside text-neutral-300 text-sm space-y-1">
                    <li>Cookies esenciales para el funcionamiento del sitio.</li>
                    <li>Cookies de análisis para mejorar el rendimiento.</li>
                    <li>Cookies opcionales para personalización.</li>
                </ol>
            </section>

            <section className="grid gap-y-1">
                <h2 className="text-white font-semibold">6. Contacto</h2>
                <p className="text-neutral-300 text-sm">
                    Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos,
                    puedes comunicarte con nosotros a través del siguiente correo electrónico:
                    <span className="text-primary hover:underline font-semibold">
                        <a href="mailto:contacto@foxcode.com"> contacto@foxcode.com</a>
                    </span>
                </p>


                <p className="text-neutral-400 text-xs mt-2">
                    Nos reservamos el derecho de actualizar esta política en cualquier momento.
                    Recomendamos revisarla periódicamente para estar informado sobre cómo protegemos tu información.
                </p>
            </section>
        </main>
    );
}