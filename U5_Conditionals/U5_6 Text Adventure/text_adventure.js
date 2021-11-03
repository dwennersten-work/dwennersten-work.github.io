alert("You are a warrior maiden in a kingdom long long ago.  Recently a young hero went to slay the dragon that has been burning villages as of late.  You saw the hero be taken by the dragon to the back side of a nearby mountain.")

let woods_or_mountain = prompt("Do you (1) go through the woods to reach the back side of the mountain, or do you (2) climb over the mountain? Please type 1 for woods or 2 for climb");

if(woods_or_mountain == 1) {
    let dark_or_easy = prompt("As walk through the woods a ways, you are presented with two paths.  Do you (1) go down the dark and scary looking road that looks like it go towards the back side of the mountain, or do you (2) go down the easier well-lit looking road that appears to go away from your destination?")
    if(dark_or_easy==1){
        alert("You get lost in a deep dark wood and eventually die of starvation.  Game over...");
    } else {
        let cliff_or_easy = prompt("As you go down the easy road, you notice the back side of the mountain has a cliff that appears to lead to the dragon's lair.  The cliff is very steep.  You also see another path leading further away from the moutain.  Do you (1) take the easy path or (2) climb cliff?");
        if (cliff_or_easy==1){
            alert("Eventually the woods get deeper and darker.  You get lost, and eventually die of starvation.  Game over...");
        } else {
            alert("You climb the cliff, find the dragon's lair, slay the dragon, and rescue the hero.  Woohoo!!!  You win!");
        }
    }
} else {
    alert("As you climb the front of the moutain, the dragon finds and captures you.  You find yourself on tonight's menu.  Game over...");
}
