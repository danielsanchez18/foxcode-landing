export interface ProcessStepData {
    icon: string;
    title: string;
    description: string;
}

export const processData: ProcessStepData[] = [
    {
        icon: "search.svg",
        title: "Investigación y análisis",
        description: "Comprendemos las necesidades del cliente y el mercado para definir los requisitos del proyecto."
    },
    {
        icon: "code.svg",
        title: "Diseño y prototipado",
        description: "Creamos diseños y prototipos interactivos para visualizar la solución antes del desarrollo."
    },
    {
        icon: "screwdriver.svg",
        title: "Desarrollo ágil",
        description: "Utilizamos metodologías ágiles para desarrollar el software de manera iterativa y colaborativa."
    },
    {
        icon: "rocket.svg",
        title: "Lanzamiento y soporte",
        description: "Implementamos la solución y ofrecemos soporte continuo para asegurar su éxito."
    }
]