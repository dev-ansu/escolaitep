
type BeneficiosProps = { beneficio: string }

export type BannerProps = { url: string; imgix_url: string;}

type CursosProps = { title: string, image: BannerProps; description: string;}

export interface HomeProps{
    object:{
        slug: string;
        title: string;
        type: string;
        metadata:{
            banner:BannerProps;
            heading: string;
            cta_button: {
                title: string;
                url: string;
            };
            escola:{
                description: string;
                beneficios: BeneficiosProps[];
                banner: BannerProps;
            };
            cursos: CursosProps[];
            contatos: {
                email: string,
                phone: string,
                address: string,
                time: string
            }
        }

    }
}
