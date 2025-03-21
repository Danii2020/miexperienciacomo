import PaperContainer from "../components/Container/PaperContainer";
import Title from "../components/Typography/Title";

const TermsPage = () => {
    return (
        <PaperContainer>
            <Title>Términos y Condiciones de Uso</Title>
            <div className="space-y-4">
                <p>
                    <strong>1. Aceptación de los Términos:</strong> Al acceder y utilizar
                    la plataforma, aceptas cumplir con los términos y condiciones
                    establecidos en este documento. Si no estás de acuerdo con estos
                    términos, te pedimos que no utilices la plataforma.
                </p>

                <p>
                    <strong>2. Descripción del Servicio:</strong> La plataforma permite a
                    los usuarios compartir experiencias profesionales, lecciones y
                    aprendizajes a través de publicaciones. Los usuarios pueden crear,
                    editar y eliminar sus propios posts al iniciar sesión con una cuenta de
                    Google. Las publicaciones pueden ser vistas por cualquier usuario, sin
                    necesidad de iniciar sesión.
                </p>

                <p>
                    <strong>3. Registro e Ingreso:</strong> Para crear, editar o eliminar
                    publicaciones, es necesario iniciar sesión con una cuenta de Google.
                    Al hacerlo, la plataforma podrá mostrar tu nombre asociado a dicha
                    cuenta, así como tu foto de perfil, dependiendo de tu preferencia. También
                    podrás elegir si deseas mostrar tu nombre completo.
                </p>

                <p>
                    <strong>4. Contenido de Usuario:</strong> Eres el único responsable del
                    contenido que publicas en la plataforma. Esto incluye, pero no se limita a,
                    textos, imágenes, videos y cualquier otro material que compartas. Te
                    comprometes a no compartir contenido que infrinja derechos de autor, sea
                    difamatorio, discriminatorio o ilegal.
                </p>

                <p>
                    <strong>5. Privacidad y Seguridad:</strong> La plataforma recopila la
                    información necesaria para la autenticación (a través de Google) y para el
                    proceso de onboarding (rol profesional y tiempo de experiencia). Nos
                    comprometemos a proteger tu información personal conforme a nuestra
                    política de privacidad.
                </p>

                <p>
                    <strong>6. Uso Aceptable:</strong> No se permite el uso de la plataforma
                    para actividades ilegales, como el fraude, el acoso o la publicación de
                    contenido que infrinja la ley. Te comprometes a utilizar la plataforma de
                    manera responsable y respetuosa.
                </p>

                <p>
                    <strong>7. Modificación de Términos:</strong> Nos reservamos el derecho de
                    modificar estos términos en cualquier momento. Cualquier cambio será
                    publicado en esta página y entrará en vigencia al momento de su
                    publicación.
                </p>

                <p>
                    <strong>8. Terminación del Servicio:</strong> Podemos suspender o
                    cancelar tu acceso a la plataforma en caso de violaciones graves de estos
                    términos o por motivos operativos.
                </p>

                <p>
                    <strong>9. Exención de Responsabilidad:</strong> La plataforma no se
                    responsabiliza por la exactitud, confiabilidad o calidad del contenido
                    publicado por los usuarios. El uso de la plataforma es bajo tu propio riesgo.
                </p>

                <p>
                    <strong>10. Ley Aplicable:</strong> Estos términos se regirán por las leyes
                    aplicables en la jurisdicción donde se encuentre la plataforma.
                </p>
            </div>

        </PaperContainer>
    );
};

export default TermsPage;
