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
                this.changeContent(data, e)
            });
        });

        const imgNinja = "../assets/images/ninja.png";
        const showImg = document.createElement("img");
        showImg.src = imgNinja;
        document.querySelector("#imagecon")?.appendChild(showImg);
    }

    changeContent(data: Content[], event: Event) {
        console.log(data, event);

        let mHeadline = document.querySelector("#headline");

        const target = event.currentTarget as HTMLElement; // Cast to HTMLElement
        const index: string | undefined = target.dataset.index; // Access dataset properties
        if(index!==undefined){
            ShowActor.currentDataIndex = parseInt(index);
        }

        console.log(mHeadline);
        console.log(index);

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
