const temp={
    deleteButton:".remove_comment",
    name:"#name",
    email:"#email",
    sendComment:"#sendComment",
    comment:"#comment",
    commentForm :"#commentForm"
    
}

const deleteComment =()=>{
    $(temp.deleteButton).on("click",function(e){
        $(this).parents(".comment").first().remove();
    })
}

const addComment=()=>{
    $(temp.sendComment).on("click",function(e){
        var form = $(temp.commentForm)[0];
        var isValid =form.checkValidity();
        var currentDate = new Date();
        var now =currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear() +' '+currentDate.getHours()+':'+currentDate.getMinutes();

        var adSoyad=$(document).find(temp.name);
        var mail=$(document).find(temp.email);
        var yorum=$(document).find(temp.comment);
        console.log(isValid);
        if(isValid){
            var item =
            `
            <div class="comment">
                <ul class="timeline">
                    <li class="timeline-item">
                        <div class="timeline-arrow"></div>
                        <div class="card">
                            <div class="card-header">
                                <div class="row ">
                                    <div class="col-md-4 col-sm-3">
                                        <span class="kisi fa fa-user pull-left">&numsp;
                                            ${adSoyad.val()}
                                        </span>    
                                    </div>
                                    <div class="col-md-6 col-sm-7 ">
                                        <span class="email fa fa-envelope pull-left">&numsp;
                                            ${mail.val()}
                                        </span>
                                    </div>
                                    <div class="col-md-2 col-sm-2">
                                        <button  class=" remove_comment btn btn-danger btn-sm pull-right"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                ${yorum.val()}
                            </div>
                            <div class="card-footer text-muted ">
                                <label class="pull-right fa fa-clock-o">&numsp;${now}</label>
                            </div>
                        </div>
                    </li>
                </ul>                    
            </div>
            `;
            $(document).find(".yorum_list").append(item)
            $(".yorum_list").scrollTop($(document).height())
            adSoyad.val('');
            mail.val('');
            yorum.val('');
            form.classList.remove("was-validated");
        }else{
            form.classList.add('was-validated');
        }

        deleteComment();
    })
}

const loadComment=()=>{ //document ready olunca bir kaynaktan yorumların alınması gerekiyor.
    $(document).ready(function(e){
        console.log("document is ready");
        $.ajax({
            method:"GET",
            url:$(".yorum_list").data("url"),
            success:function(data){
                console.log(data.comments[1]);
                console.log(data.comments.length);
                for(var i =0; i<data.comments.length;i++){
                    var item =
                        `
                        <div class="comment">
                            <ul class="timeline">
                                <li class="timeline-item">
                                    <div class="timeline-arrow"></div>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="row ">
                                                <div class="col-md-4 col-sm-3">
                                                    <span class="kisi fa fa-user pull-left">&numsp;
                                                        ${data.comments[i].name}
                                                    </span>    
                                                </div>
                                                <div class="col-md-6 col-sm-7">
                                                    <span class="email fa fa-envelope pull-left">&numsp;
                                                        ${data.comments[i].mail}
                                                    </span>
                                                </div>
                                                <div class="col-md-2 col-sm-2">
                                                    <button  class=" remove_comment btn btn-danger btn-sm pull-right"><i class="fa fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            ${data.comments[i].comment}
                                        </div>
                                        <div class="card-footer text-muted ">
                                            <label class="pull-right fa fa-clock-o"> &numsp; ${data.comments[i].date}</label>
                                        </div>
                                    </div>
                                </li>
                            </ul>                    
                        </div>
                        `;
                        $(document).find(".yorum_list").append(item)
                }
                deleteComment();
            }
            
        })
    })
}
const collapse =()=>{
    $(document).on("click",function(){
        if($(document).find("#navbarText").hasClass("show")){
            $(document).find("#navbarText").removeClass("show")
        }
    })
}
export{
    deleteComment,
    addComment,
    loadComment,
    collapse
}