import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";

const BlogDetailPage = () => {
    return ( 
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold">Post One</h1>
            <p>Written by: John Doe</p>
            <div className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus impedit maiores autem inventore nesciunt quia ex nulla dolores explicabo sunt, culpa quos fugit corporis expedita quasi dicta, aliquid exercitationem!</div>
            <Comments />
            <FormComment />
        </div>
    );
}
 
export default BlogDetailPage;