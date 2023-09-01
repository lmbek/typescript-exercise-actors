export interface Content {
    name:        string;
    img:         string;
    information: Information;
    text:        string;
}

export interface Information {
    strength: number;
    lives:    number;
}

export class ShowActor {
    static currentDataIndex:number = -1;



    constructor(data: Content[]) {
        let getMenuItems = document.querySelectorAll("#menuItemContainer > .menuItem");

        getMenuItems.forEach((element, index) => {
            element.setAttribute("data-index", `${index}`);
            element.textContent = data[index].name;
            element?.addEventListener("click",  (e)=>{
                this.changeContent(data, e, index)
            });
        });

        const imgNinja = "../assets/images/ninja.png";
        const showImg = document.createElement("img");
        showImg.src = imgNinja;
        document.querySelector("#imagecon")?.appendChild(showImg);
    }

    changeContent(data: Content[], event: Event, index: number) {
        console.log(data, event, index);
        console.log(index);
        ShowActor.currentDataIndex = index;
        let mHeadline = document.querySelector("#headline");
        console.log(mHeadline);
        /*
        if(event.currentTarget!= null) {
            const index = event.currentTarget.dataset.index;
            if (index !== undefined) {
                const me: number = parseInt(index);
                console.log(me);
            }
        }
        */
    }
}
