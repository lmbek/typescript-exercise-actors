type Character = {
    name: string;
    img: string;
    information: {
        strength: number;
        lives: number;
    };
    text: string;
};

type Content = {
    content: Character[];
};

class ShowActor {
    constructor(data: Content[]) {

        let getMenuItems = document.querySelectorAll("#menuItemContainer > .menuItem");

        getMenuItems.forEach((element, index) => {
            element.setAttribute("data-index", `${index}`);
            element.textContent = data[index].name;
            element?.addEventListener("click",  this.changeContent);
        });

        const imgNinja = "../assets/images/ninja.png";
        const showImg = document.createElement("img");
        showImg.src = imgNinja;
        document.querySelector("#imagecon")?.appendChild(showImg);
    }

    changeContent(){

        console.log('mymenu')
    }
}
export default ShowActor;