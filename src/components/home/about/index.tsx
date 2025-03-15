import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss"
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PagesProps } from "@/utils/pages.type";
import { getPages } from "@/utils/actions/get-data";
import Link from "next/link";

interface AboutProps extends HomeProps{
    courses: PagesProps;
}

const About =  async ({ object }: HomeProps)=>{
    const {objects}: PagesProps = await getPages();

    return (

        <>
            <section id="escola" className={styles.containerAbout}>
                <article className={styles.innerAbout}>
                    <h1 className={styles.title}>Sobre</h1>
                    <p>{object.metadata.escola.description}</p>
                    <ul className={styles.innerBeneficios}>
                        {object.metadata.escola.beneficios.map( beneficio => (
                            <li key={beneficio.beneficio}>
                                <CheckCircle />
                                { beneficio.beneficio }
                            </li>    
                        ))}
                    </ul>
                </article>
                <div className={styles.bannerAbout}>
                    <Image 
                        className={styles.imageAbout}
                        alt="Imagem ilustrativa sobre a empresa"
                        quality={100}
                        fill={true}
                        sizes="100"
                        src={object.metadata.escola.banner.url}
                    />
                </div>
            </section>
            <h2 className={styles.coursesTitle}>Conheça nossos cursos</h2>
            
            <section className={styles.courses}>

                {objects.map( (curso, i) => (
                    <Link className={styles.courseLink} href={`/course/${curso.slug}`}>
                        <article key={i} className={styles.course}>
                            <div className={styles.innerCourse}>
                            <Image 
                                className={styles.imageCourse}
                                alt="Imagem ilustrativa sobre o curso"
                                quality={100}
                                fill={true}
                                priority={true}
                                src={curso.metadata.banner.url}
                                sizes="(max-width: 480px) 100vw, (max-width:1024px) 75vw, 50%"
                            />
                            </div>
                            <div className={styles.courseAbout}>
                                <p className={styles.courseTitle}>{curso.title}</p>
                                <p>{curso.metadata.description.text.substring(0, 100)}...</p>                 
                            </div>       
                        </article>
                    </Link>
                ))}

            </section>
        </>

    )            
}


export default About;
    