export default function Reclamations() {
    return (
        <main id="reclamaciones" 
            className="w-full bg-black/50 p-6 rounded-xl flex flex-col gap-y-5 mx-auto max-lg:px-5"
        >
            <div className="mb-5">
                <h1 className="text-xl font-medium">Libro de Reclamaciones</h1>
                <p className="text-neutral-300 text-sm">
                    Conoce nuestro proceso de atención de reclamaciones y cómo protegemos tus derechos como cliente.
                </p>
            </div>

            <form className="grid md:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-2 w-full">
                    <label 
                        htmlFor="name"
                        className="text-sm block text-neutral-300 font-semibold"
                    >
                        Nombres completos
                    </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ingrese sus nombres completos"
                        required
                        autoComplete="off"
                        className="w-full border-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Lastname */}
                <div className="space-y-2 w-full">
                    <label 
                        htmlFor="lastname"
                        className="text-sm block text-neutral-300 font-semibold"
                    >
                        Apellidos 
                    </label>
                    <input 
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Ingrese sus apellidos completos"
                        required
                        autoComplete="off"
                        className="w-full border-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* DNI */}
                <div className="space-y-2 w-full">
                    <label 
                        htmlFor="dni"
                        className="text-sm block text-neutral-300 font-semibold"
                    >
                        DNI
                    </label>
                    <input 
                        type="text"
                        id="dni"
                        name="dni"
                        placeholder="Ingrese su DNI"
                        required
                        autoComplete="off"
                        className="w-full border-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2 w-full">
                    <label 
                        htmlFor="phone"
                        className="text-sm block text-neutral-300 font-semibold"
                    >
                        Teléfono de contacto
                    </label>
                    <input 
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Ingrese su teléfono"
                        required
                        autoComplete="off"
                        className="w-full border-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2 w-full">
                    <label 
                        htmlFor="email"
                        className="text-sm block text-neutral-300 font-semibold"
                    >
                        Correo electrónico
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingrese su correo electrónico"
                        required
                        autoComplete="off"
                        className="w-full border-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Detail */}
                <div className="space-y-2 md:col-span-2 w-full">
                    <label 
                        htmlFor="detail"
                        className="text-sm block text-neutral-300 font-semibold"
                    >
                        Detalle del reclamo
                    </label>
                    <textarea 
                        id="detail"
                        name="detail"
                        placeholder="Ingrese el detalle de su reclamo"
                        required
                        rows={3}
                        autoComplete="off"
                        className="w-full border-lg bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                </div>

                {/* Button */}
                <div className="space-y-2 md:col-span-2 w-full">
                    <button 
                        type="submit"
                        className="w-full border-lg font-medium bg-primary rounded-lg px-4 py-3 text-sm text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        Enviar reclamo
                    </button>
                </div>
            </form>
        </main>
    );
}
