
// class API{

//     private baseURL: URL;
//     private init: RequestInit;

//     constructor(baseURL: URL, init: RequestInit){
//         this.baseURL = baseURL;
//         this.init = init;
//     }

//     private async api(url: string){
//         return await fetch()
//     }

//     async get(){

//     }

//     async post(){

//     }
// }


export async function getDataHome(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67b137b74bbee8169a8f530f?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, {next: { revalidate: 120 }})
        if(!res.ok){
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }catch(err){
        throw new Error("Failed to fetch data");
    }
}

export async function getPages(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type,`, {next: { revalidate: 120 }})
        if(!res.ok){
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }catch(err){
        throw new Error("Failed to fetch menu data")
    }
}


export async function getPageBySlug(itemSlug: string){
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`
    const queryParams = new URLSearchParams({
        query: JSON.stringify({slug: itemSlug}),
        props: 'slug,title,content,metadata',
        read_key: process.env.READ_KEY as string,
    });
    const url = `${baseUrl}?${queryParams.toString()}`
    try{
        const res = await fetch(url, {next: { revalidate: 120 }})
        if(!res.ok){
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }catch(err){
        throw new Error("Failed to fetch menu data")
    }
}