interface ModeloProps {
    name: string;
    yearsOld?: number;
}

export default function Hijo(props: ModeloProps) {
    return (
        <>
            <h2>Hijo!</h2>
            <h3>Nombre: {props.name}</h3>
            {props.yearsOld && (
                <h3>Edad: {props.yearsOld}</h3>
            )}
        </>
    )
}