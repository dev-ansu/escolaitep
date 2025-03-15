import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss"
import {Mail, Map, Phone, Clock, PhoneIcon} from "lucide-react"

const Footer = ({object}: HomeProps)=>{


    return (

        <footer id="contatos" className={styles.footer}>
            <section className={styles.section}>
                <h2 className={styles.title}>Contatos</h2>
                
                <div className={styles.content}>

                    <div className={styles.item}>
                        <Mail size={28} color="#fff" />
                        <div>
                            <strong>E-mail</strong>
                            <p>{object.metadata.contatos.email}</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <Phone size={28} color="#fff" />
                        <div>
                            <strong>Telefone</strong>
                            <p>{object.metadata.contatos.phone}</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <Map size={28} color="#fff" />
                        <div>
                            <strong>Endereço</strong>
                            <p>{object.metadata.contatos.address}</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <Clock size={28} color="#fff" />
                        <div>
                            <strong>Funcionamento</strong>
                            <p>{object.metadata.contatos.time}</p>
                        </div>
                    </div>

                </div>
            </section>

            <a href={object.metadata.cta_button.url} target="_blank" className={styles.link}>
                <PhoneIcon size={24} color="#FFF" />
                {object.metadata.cta_button.title}
            </a>

            <p className={styles.copyText}>Todos os direitos reservados {object.title} @ {`${new Date().getFullYear()}`}</p>
        </footer>

    )            
}


export default Footer;
    