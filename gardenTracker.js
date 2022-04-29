class User {
    #gardens;
    constructor(){
        this.#gardens = [];
    }

    plant(plot, seed){
        let plotState = plot.getState();
        if(plotState == "tilled"){
            plot.setSeed(seed);
            plot.setState("planted"); 
            alert("You have planted " + seed + " in " + plot.getName() + ".");
        } else {
            console.log("You can only plant a plot that has been tilled!");
        }
    }


    till(plot){
        plot.setState("tilled");
        plot.setSeed("none");
        alert("You have tilled plot :" + plot.getName())
    }


    harvest(plot){
        let seedPlanted = plot.getSeedPlanted();
        if(seedPlanted != "none"){
            alert("You have harvested plot :" + plot.getName())
        }
    }


    addGarden(name){
        let newGarden = new Garden(name);
        this.#gardens.push(newGarden);
        alert("A new garden was created with the name " + name);
    }

    removeGarden(name){
        for(let i=0; i<this.#gardens.length; i++){
            let gardenName = this.#gardens[i].getName();
            if(gardenName==name){
                console.log(gardenName + " is removed from your gardens.");
                this.#gardens.splice(i,1);
            }
        }
    }

    getGardens(){
        return this.#gardens;
    }

    printGardens(){
        let gardenList = "";
        for(let i=0; i<this.#gardens.length; i++){
            let currentGarden = this.#gardens[i];
            gardenList += i + ": " + currentGarden.getName();
        }
        alert("You have the following gardens available: " + gardenList)
    }
}

class Garden{
    #plots;
    #name;
    constructor(name){
        this.#plots = [];
        this.#name = name;
    }

    addPlot(name){
        let newPlot = new Plot(name)
        this.#plots.push(newPlot);
        console.log("A new plot named " + name + "has been added to the garden called " + this.#name +"."); 
    }

    removePlot(name){
        for(let i=0; i<this.#plots.length; i++){
            let plotName = this.#plots[i].getName();
            if(plotName==name){
                console.log(plotName + " is removed from your plots.");
                this.#plots.splice(i,1);
            }
        }
    }

    getName(){
        return this.#name;
    }

    printPlots(){
        let plotList = "";
        for(let i=0; i<this.#plots.length; i++){
            let nextPlot = this.#plots[i];
            plotList += i + ": " + nextPlot.getName();
        }
        alert("You have the following plots available: " + plotList)
    }

    getPlots(){
        return this.#plots;
    }


}

class Plot{
    #name;
    #seedPlanted;
    #state;
    constructor(name){
        this.#name = name;
        this.#state = "untilled";
        this.#seedPlanted = "none";
    }

    printOptions(){
        // States - untilled, tilled, planted, havestable
        if(this.#state == "untilled"){
            console.log("You may till the garden");
        } else if(this.#state == "tilled"){
            console.log("You may plant the garden.");
        } else if(this.#state == "planted"){
            console.log("You may harvest the garden");
        }
    }

    setSeed(seed){
        if(this.#state == "tilled"){
            this.#seedPlanted = seed;
            
        } else {
            console.log("You may only plant a garden that is tilled.");
        }
    }

    setState(state){
        this.#state = state;
    }

    getName(){
        return this.#name;
    }

    getState(){
        return this.#state;
    }

    getSeedPlanted(){
        return this.#seedPlanted;
    }
}


let user = new User();
user.addGarden("Veggies");

let gardenTracking = true;
while (gardenTracking){
    // prompt to select or create garden
    let selectOrCreateGarden = Number(prompt("Would you like to (1) select a garden, (2) create a garden, or (3) exit the program."));
    
    if(selectOrCreateGarden == 1){
    // print available gardens
        user.printGardens();
        let gardenChoice = Number(prompt("Please type the index of the garden you want to choose."));
        let userGardens = user.getGardens();
        let currentGarden = userGardens[gardenChoice];
        let inGarden = true;
        while(inGarden){
            let selectPlotChoice = Number(prompt("Would you like to (1) select a plot (2) create a plot (3) go back to your garden selection?"));
            if(selectPlotChoice==1){
                currentGarden.printPlots();
                let plotChoice = Number(prompt("Please type the index of the plot you want to choose."));
                let gardenPlots = currentGarden.getPlots();
                let currentPlot = gardenPlots[plotChoice];
                alert("You have selected plot " + currentPlot.getName());
                let inPlot = true;
                while(inPlot){
                    let chooseWhatToDoInPlot = Number(prompt("Would you like to (1) till the plot, (2) plant the plot, (3) harvest, or (4) select a new plot?"));
                    if(chooseWhatToDoInPlot==1){
                        user.till(currentPlot);
                    } else if (chooseWhatToDoInPlot==2){
                        let seedType = prompt("What kind of seed do you want to plant?")
                        user.plant(currentPlot, seedType);
                    } else if (chooseWhatToDoInPlot==3){
                        user.harvest(currentPlot);
                    } else {
                        inPlot = false;
                    }
                }
                
            } else if (selectPlotChoice==2){
                let plotName = prompt("What would you like to name your plot?");
                currentGarden.addPlot(plotName);
            } else {
                inGarden = false;
            }
        }
    } else if (selectOrCreateGarden==2){
        let gardenName = prompt("What is the name of the garden");
        user.addGarden(gardenName);
    } else {
        gardenTracking = false;
    }
}

alert("Thank you for using the Garden tracker!");
