import {Suspense} from "react"
import { getPageBySlug } from "@/utils/actions/get-data";
import { PageProps } from "@/utils/page.type";
import { Metadata } from "next"
import Content from "./components/content";
import { LoadingPage } from "./components/loading";

export interface CourseProps {
    params: { slug: string };
}

export async function generateMetadata({ params: { slug } }: CourseProps): Promise<Metadata>{

    try{
        const { objects }: PageProps = await getPageBySlug(slug).catch(()=>{
            return {
                title: "ITEP",
                description: "Instituto de Tecnologia e Ensino Profissionalizante"
            }
        })

        return {
            title: `ITEP - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            openGraph:{
                title: `ITEP - ${objects[0].title}`,
                images: [`${objects[0].metadata.banner}`]
              },
              robots:{
                index: true,
                follow: true,
                nocache: true,
                googleBot:{
                  index: true,
                  follow: true,
                  noimageindex: true
                }
              }
        }
    }catch(err){
        return {
            title: "ITEP",
            description: "Instituto de Tecnologia e Ensino Profissionalizante"
        }
    } 
}

const Course = async({ params: { slug } }: CourseProps)=>{

    return (
        <>
            <Suspense fallback={<LoadingPage />}>
                <Content slug={slug} />
            </Suspense>
        </>
    )            
}


export default Course;
    