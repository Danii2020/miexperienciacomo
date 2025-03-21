import PaperContainer from "../components/Container/PaperContainer";
import Title from "../components/Typography/Title";

const PrivacyPage = () => {
  return (
    <PaperContainer>
      <Title>Política de Privacidad</Title>
      <div className="space-y-4">
        <p>
          <strong>1. Información que Recopilamos</strong>
        </p>
        <p>
          Recopilamos la siguiente información cuando accedes y utilizas nuestra
          plataforma:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Datos de Autenticación:</strong> Utilizamos tu cuenta de
            Google para autenticarte en la plataforma. Esta información incluye
            tu nombre y tu dirección de correo electrónico asociada.
          </li>
          <li>
            <strong>Datos del Perfil:</strong> Durante el proceso de onboarding,
            solicitamos tu rol profesional y el tiempo que llevas desempeñándote
            en tu campo. Esta información es opcional, pero nos ayuda a
            personalizar tu experiencia.
          </li>
          <li>
            <strong>Datos de Publicación:</strong> Cuando creas, editas o eliminas
            publicaciones, recopilamos el contenido que subes (texto, imágenes,
            videos). Este contenido es gestionado por ti y puede ser visualizado
            por otros usuarios.
          </li>
          <li>
            <strong>Preferencias del Usuario:</strong> Tienes la opción de mostrar
            o no tu nombre completo y foto de perfil, información que solo se
            mostrará si decides compartirla.
          </li>
        </ul>

        <p>
          <strong>2. Uso de la Información</strong>
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Autenticación y Acceso:</strong> Para permitirte iniciar
            sesión y acceder a la plataforma.
          </li>
          <li>
            <strong>Personalización:</strong> Para ofrecerte una experiencia
            personalizada en base a la información proporcionada durante el
            onboarding.
          </li>
          <li>
            <strong>Gestión de Publicaciones:</strong> Para permitirte crear,
            editar y eliminar tus publicaciones.
          </li>
          <li>
            <strong>Mejoras de la Plataforma:</strong> Utilizamos la información
            para mejorar nuestros servicios, corregir errores y optimizar el
            funcionamiento de la plataforma.
          </li>
        </ul>

        <p>
          <strong>3. Protección de la Información</strong>
        </p>
        <p>
          Nos tomamos la privacidad de tus datos muy en serio. Implementamos medidas
          de seguridad razonables para proteger tu información personal contra el
          acceso no autorizado, alteración, divulgación o destrucción.
        </p>

        <p>
          <strong>4. Compartir la Información</strong>
        </p>
        <p>
          No vendemos, alquilamos ni compartimos tu información personal con
          terceros, salvo que sea necesario para el funcionamiento de la
          plataforma o por razones legales. Podemos compartirla con proveedores
          de servicios externos, quienes están obligados a proteger tu
          información.
        </p>

        <p>
          <strong>5. Almacenamiento de Datos</strong>
        </p>
        <p>
          Tu información personal y las publicaciones se almacenan en nuestros
          servidores. Si eliminas una publicación o tu cuenta, se eliminarán de
          forma permanente.
        </p>

        <p>
          <strong>6. Uso de Cookies</strong>
        </p>
        <p>
          La plataforma utiliza cookies para mejorar tu experiencia, como
          mantener tu sesión iniciada y almacenar preferencias. Puedes configurar
          tu navegador para recibir notificaciones o desactivarlas, aunque algunas
          funciones podrían verse afectadas.
        </p>

        <p>
          <strong>7. Derecho a Acceder y Controlar tu Información</strong>
        </p>
        <p>
          Tienes derecho a acceder, corregir o eliminar tu información personal.
          Puedes actualizar tu perfil o cambiar tus preferencias desde la
          configuración de la plataforma. Si deseas eliminar tu cuenta, también
          puedes hacerlo.
        </p>

        <p>
          <strong>8. Cambios en la Política de Privacidad</strong>
        </p>
        <p>
          Podemos actualizar esta política de privacidad para reflejar cambios en
          nuestras prácticas. Los cambios se publicarán en esta página y entrarán en
          vigencia inmediatamente. Te recomendamos revisarla periódicamente.
        </p>

        <p>
          <strong>9. Contacto</strong>
        </p>
        <p>
          Si tienes alguna pregunta o inquietud sobre nuestra política de
          privacidad, contáctanos a través del correo electrónico proporcionado en
          la plataforma o en el apartado de contacto.
        </p>
      </div>
    </PaperContainer>
  );
};

export default PrivacyPage;
