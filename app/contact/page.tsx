import PaperContainer from "../components/Container/PaperContainer";
import Title from "../components/Typography/Title";
import ContactForm from "./ContactForm";

const ContactPage = () => {
    return (
        <PaperContainer>
            <Title>
                Cuéntanos en qué te podemos ayudar
            </Title>
            <p className="font-normal text-lg mb-4">
                Si deseas ponerte en contacto, completa el formulario y atenderemos tu consulta
                lo más pronto posible.
            </p>
           <ContactForm />
        </PaperContainer>
    )
}

export default ContactPage;
