let API="https://project-1-api.herokuapp.com/comments?api_key=ab5454e8-eec0-4bad-987e-6f4afa13f39f";

let commentsArray=[];



const commentSection=document.querySelector(".comments__list");



function displayComments(arr){
    let comment=document.createElement("li");
    comment.classList.add("comments__item")
    
    let profilepic=document.createElement("div");
    profilepic.classList.add("comments__profile-pic-div");

    let commentHeader=document.createElement("div")
    commentHeader.classList.add("comments__header")

    let commentDiv=document.createElement("div");
    commentDiv.classList.add("comments__container")

    let userName=document.createElement("p");
    userName.innerText=arr.name;
    userName.classList.add("comments__username")

    let commentDate=document.createElement("p");
    commentDate.innerText=new Date(arr.timestamp).toDateString();
    commentDate.classList.add("comments__date")

    let commentText=document.createElement("p");
    commentText.innerText=arr.comment;
    commentText.classList.add("comments__text")


    commentSection.appendChild(comment);
    comment.appendChild(profilepic);
    comment.appendChild(commentDiv);
    commentDiv.appendChild(commentHeader);
    commentHeader.appendChild(userName);
    commentHeader.appendChild(commentDate);
    commentDiv.appendChild(commentText);
};


axios
    .get(API)
    .then((response)=>{(commentsArray=response.data);
    commentsArray.sort(function(a,b){return b.timestamp-a.timestamp});
    commentsArray.forEach((comment)=>displayComments(comment))
    .catch((error)=>console.error(error))});

let form=document.querySelector(".form__body")
form.addEventListener('submit',function(event){
    event.preventDefault();



    let newName=event.target.newName.value;
    let newComment=event.target.newComment.value;
    let addedComment={
        name: newName,
        comment:newComment
        };

    axios
        .post(API, addedComment)
        .then((response) => {
            commentSection.innerHTML=null;
            commentsArray.unshift(response.data);
            commentsArray.forEach((comment)=>displayComments(comment));
        })
        .catch((error)=>console.error(error));
    form.reset();
})

