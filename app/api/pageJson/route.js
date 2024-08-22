import Post from '@/lib/db/schema/page'
export async function POST(request) {
    try{
    const newPost =new Post({
        random:1,
        name:"keshav"
    })
    await newPost.save();
    return Response.json({messsage:"done"});
   }catch(e){
    return Response.json({error:e.message});
   }
}