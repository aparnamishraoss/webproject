import CommentCard from "./CommentCard"

function TrendingComments({comments}) {

    console.log("Inside Trending Comments" + comments)

    return (
    <div className="mt-4">
            <h1>Trending Comments</h1>
                    {comments.map((item) => <CommentCard key={comments.id} comment = {item}/>)}
        </div>

    );
}

export default TrendingComments;