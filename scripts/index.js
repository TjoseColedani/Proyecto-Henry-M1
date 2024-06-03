let id = 0; 

class Activity {
    constructor({ title, description, imgUrl }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor(){
        this.activities = [];
        //this.id = 0;
    }
    getAllActivities = () => this.activities;
    
    createActivity = (activityObj) => {
        const activity = new Activity(activityObj);
        this.activities.push(activity)
    }
    deleteActivity(activityId){
        this.activities = this.activities.filter(activity => activity.id != activityId);
        renderRepository();
    }
}

/* const repository = new Repository(); */

/* function activityToHTML(activity){
    let { title, description, imgUrl } = activity;

    const cardContainer = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardImg = document.createElement("img");
    const cardDescription = document.createElement("p");
    const deleteButton = document.createElement("button");


    cardTitle.innerText = title; //estas 3 se asignan los valores.
    cardImg.src = imgUrl;
    cardDescription.innerText = description;
    cardContainer.classList.add("activity-card","text-center")

    cardTitle.classList.add("text-xl","mb-1");
    
    cardImg.classList.add("rounded-xl","mb-1");
    
    cardDescription.classList.add("text-justify","mb-1");

    deleteButton.classList.add("button-style")
    
    deleteButton.classList.add("bg-red-600","p-1","rounded-xl");
    deleteButton.innerHTML = "Delete Activity";
    deleteButton.addEventListener("click", () => this.deleteActivity(id));
    
    
    cardContainer.append(cardTitle,cardImg,cardDescription,deleteButton);
    
    cardContainer.classList.add("p-2","bg-gray800","rounded-xl");
    return cardContainer;
}

function renderRepository() {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    const activities = repository.getAllActivities();
    const activitiesHTML = activities.map(activity => activityToHTML(activity));

    activitiesHTML.forEach(activity => cardsContainer.append(activity));

}


function handler(event) {
    event.preventDefault();
    const titleInput = document.getElementById("activity-text").value;
    const titleDescriptiont = document.getElementById("activity-description").value;
    const titleImgUrl = document.getElementById("activity-imgUrl").value;



    if (titleInput.length > 0 && titleDescriptiont.length > 0 && titleImgUrl.length > 0){
        
        const activityObj = {
            title: titleInput,
            description: titleDescriptiont,
            imgUrl: titleImgUrl
        }

        id++;

        repository.createActivity(activityObj);
        renderRepository();

    } else {
        alert("Porfavor, llene todos los inputs")
    }

}

const sendAdd = document.getElementById("add");
sendAdd.addEventListener("click",handler); */




module.exports = { Activity, Repository };



