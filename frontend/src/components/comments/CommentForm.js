import React, {useState} from 'react';

function CommentForm({onSubmit, postNum}) {


    const [body, setBody] = useState("");
console.log('This is postId' + postNum)
const [postId, setPostId] = useState(postNum);
console.log("this is postnum" + postNum)

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Add Comment</h4>
                <div>
                    <div className="form-group">
                        <label>Body:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>



                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={() => onSubmit({body, postId})}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;