export default async function Page({ params }) {
    throw new Error("error hai")
    let languages=["python","javascript","java","cpp","cs"]
    if(languages.includes(params.slug)){
        return <div>My Post : {params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }
    const { slug } = await params
    return <div>My Post: {slug}</div>
  }