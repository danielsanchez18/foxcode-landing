export interface Plan {
    level: string;
    price: string;
    description: string;
    features: string[];
    isRecommended: boolean;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    plans?: Plan[];
}

export const services: Service[] = [
    {
        id: "desarrollo-software",
        title: "Desarrollo Software",
        description: "En nuestra empresa, ofrecemos servicios integrales de desarrollo de software a medida para satisfacer las necesidades específicas de tu negocio. Nuestro equipo de expertos trabaja en estrecha colaboración contigo para diseñar, desarrollar e implementar soluciones tecnológicas innovadoras que impulsen la eficiencia y el crecimiento de tu empresa.",
        plans: [
            {
                level: "Básico",
                price: "$200",
                description: "Ideal para pequeñas empresas y proyectos personales.",
                features: [
                    "Landing pages",
                    "SaaS 2 módulos",
                    "Mantenimiento por 3 meses",
                    "Soporte por 1 mes",
                ],
                isRecommended: false,
            },
            {
                level: "Intermedio",
                price: "$400",
                description: "Para empresas en crecimiento y proyectos más grandes.",
                features: [
                    "Landing pages",
                    "SaaS 4 módulos",
                    "Mantenimiento por 6 meses",
                    "Soporte por 3 meses",
                ],
                isRecommended: false,
            },
            {
                level: "Avanzado",
                price: "$600",
                description: "Soluciones personalizadas y soporte prioritario.",
                features: [
                    "Landing pages",
                    "SaaS 6 módulos",
                    "Mantenimiento por 12 meses",
                    "Soporte por 6 meses",
                    "Funcionalidad adicional",
                ],
                isRecommended: true,
            },
            {
                level: "Personalizado",
                price: "A tratar",
                description: "Todo lo que necesitas para llevar tu proyecto al siguiente nivel.",
                features: [
                    "Landing pages",
                    "SaaS 10 módulos",
                    "Mantenimiento por 24 meses",
                    "Soporte por 12 meses",
                ],
                isRecommended: false,
            },
        ],
    },
    {
        id: "diseno-ui-ux",
        title: "Diseño UI/UX",
        description: "Creamos experiencias digitales intuitivas y atractivas que cautivan a tus usuarios. Nuestro equipo de diseñadores expertos combina la investigación de usuarios con las mejores prácticas de diseño para crear interfaces que no solo se ven bien, sino que funcionan perfectamente.",
        plans: [
            {
                level: "Básico",
                price: "$150",
                description: "Diseño de interfaz para proyectos pequeños.",
                features: [
                    "Diseño de 1 pantalla",
                    "Revisión por 1 ronda",
                    "Entrega en 1 semana",
                ],
                isRecommended: false,
            },
            {
                level: "Completo",
                price: "$350",
                description: "Diseño integral para proyectos medianos y grandes.",
                features: [
                    "Diseño de hasta 5 pantallas",
                    "Revisión por 3 rondas",
                    "Entrega en 2 semanas",
                    "Guías de estilo",
                ],
                isRecommended: true,
            },
            {
                level: "Personalizado",
                price: "A tratar",
                description: "Diseño a medida para proyectos complejos y específicos.",
                features: [
                    "Diseño de pantallas ilimitadas",
                    "Revisión ilimitada",
                    "Entrega en tiempo acordado",
                    "Guías de estilo completas",
                    "Prototipos interactivos",
                ],
                isRecommended: false,
            }

        ],
    },
    {
        id: "branding",
        title: "Branding e identidad visual",
        description: "Construimos marcas memorables que conectan emocionalmente con tu audiencia. Desde el concepto hasta la implementación, creamos identidades visuales coherentes y poderosas que distinguen tu negocio de la competencia.",
        plans: [
            {
                level: "Básico",
                price: "300",
                description: "Identidad visual fundamental.",
                features: [
                    "Diseño de logotipo",
                    "Paleta de colores",
                    "Tipografías",
                    "Manual básico de marca",
                ],
                isRecommended: false,
            },
            {
                level: "Completo",
                price: "700",
                description: "Branding integral para tu marca.",
                features: [
                    "Diseño de logotipo + variantes",
                    "Paleta de colores extendida",
                    "Sistema tipográfico",
                    "Manual completo de marca",
                    "Aplicaciones de marca",
                    "Plantillas de redes sociales",
                ],
                isRecommended: true,
            },
            {
                level: "Personalizado",
                price: "A tratar",
                description: "Branding a medida para marcas únicas.",
                features: [
                    "Diseño de logotipo + variantes",
                    "Paleta de colores personalizada",
                    "Sistema tipográfico completo",
                    "Manual completo de marca",
                    "Aplicaciones de marca",
                    "Plantillas de redes sociales",
                    "Estrategia de marca",
                    "Naming",
                ],
                isRecommended: false,
            }
        ],
    },
    {
        id: "desarrollo-movil",
        title: "Desarrollo móvil",
        description: "Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias fluidas y de alto rendimiento. Ya sea para iOS, Android o ambos, creamos apps que tus usuarios adorarán usar.",
        plans: [
            {
                level: "MVP",
                price: "800",
                description: "Producto mínimo viable para validar tu idea.",
                features: [
                    "App para 1 plataforma",
                    "Funcionalidades básicas",
                    "Diseño estándar",
                    "Soporte por 2 meses",
                ],
                isRecommended: false,
            },
            {
                level: "Full",
                price: "1500",
                description: "Aplicación completa y robusta.",
                features: [
                    "App multiplataforma",
                    "Funcionalidades avanzadas",
                    "Diseño personalizado",
                    "Integración con backend",
                    "Soporte por 6 meses",
                    "Publicación en stores",
                ],
                isRecommended: true,
            },
        ],
    },
    {
        id: "consultoria-tech",
        title: "Consultoría Tech",
        description: "Asesoramiento experto para guiar tus decisiones tecnológicas. Analizamos tu infraestructura actual, identificamos oportunidades de mejora y te ayudamos a diseñar una estrategia tecnológica que impulse tus objetivos de negocio.",
        plans: [
            {
                level: "Básico",
                price: "100",
                description: "Sesión de consultoría estratégica.",
                features: [
                    "1 sesión de 2 horas",
                    "Análisis básico",
                    "Recomendaciones documentadas",
                ],
                isRecommended: false,
            },
            {
                level: "Mensual",
                price: "350",
                description: "Acompañamiento continuo.",
                features: [
                    "4 sesiones mensuales",
                    "Análisis detallado",
                    "Plan de acción personalizado",
                    "Soporte por email",
                    "Seguimiento de implementación",
                ],
                isRecommended: true,
            },
        ],
    },
];
