import { addComment, collapse, deleteComment, loadComment } from "./modules/comment"


$(function(){
    deleteComment();
    addComment();
    loadComment();
    collapse();
})
