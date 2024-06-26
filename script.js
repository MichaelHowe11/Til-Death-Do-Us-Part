let story = {
    "unem0": {
        "dia": "The date is July 2, 1993. You start at James's house (A friend from high-school), James hasn't been seen by you in days. He said he was going to search for food or other valuables to aid in survival. You seem suspicious of his sudden disappearance and go to investigate by stepping outside for the first time in weeks. You find that your town is no longer the bustling city it was known for but now a desolate city with nothing but the wind making a noise. You're not surprised as the relentless news coverage has already made clear, the city is plagued by creatures that feast on unsuspecting prey. In this grim reality, encountering such a monster only serves to confirm what you already know.<br>",
        "opt": ["Option 1: Page James.<br>", "Option 2: Ask around your neighborhood for information about your friend."],
        "incombat": false,
        "spot": ["unem01", "unem02"],
        "isending": false,
        "randomItem": false
    },
    "unem01": {
        "dia": "You try to page James using your pager. You wait an hour and don't hear anything from the home phone.",
        "opt": ["Option 1: Ask around your neighborhood for information about your friend.", "Option 2: Go Back Home"],
        "incombat": false,
        "spot": ["unem02", "unemhome"],
        "isending": false,
        "randomItem": false
    },
    "unem02": {
        "dia": "You go to your neighbor, James, and knock on the door. You feel a very uneasy feeling while doing this. You wait at least three minutes for a response but no one seems to be home.",
        "opt": ["Option 1: Try to open the door."],
        "incombat": false,
        "spot": ["unem021"],
        "isending": false,
        "randomItem": false
    },
    "unem021": {
        "dia": "You're worried about your neighbor James, come to think of it you haven't really heard from him in a long time either. This seems serious and your curiosity gets the best of you so you try to force yourself into his house. You get the same uneasy feeling from when you first knocked on the door but this time it's more intense. The house seems quiet, too quiet...",
        "opt": ["Option 1: Investigate<br>"],
        "incombat": false,
        "spot": ["unem0211"],
        "isending": false,
        "randomItem": false
    },
    "unem0211": {
        "dia": "You decide to investigate and see if your neighbor James is in trouble. You search the entire first floor but find nothing of importance but suddenly you hear a noise upstairs.",
        "opt": ["Option 1: Investigate", "Option 2: Search for a weapon so you're prepared."],
        "incombat": false,
        "spot": ["unem02111", "unem02112"],
        "isending": false,
        "randomItem": false
    },

    "unem02112": {
        "dia": "You go into the downstairs bedroom and find a weapon!  Armed with this weapon you are much more confident to face whatever threat awaits you.<br> (You can know type attack (weapon) in combat to attack with the weapon)",
        "opt": ["Option 1: Investigate"],
        "incombat": false,
        "spot": ["unem02111"],
        "isending": false,
        "randomItem": true,
    },
    "unem02111": {
        "dia": "As you're going upstairs you hear another noise and stop in fear...Something hits you so hard you fall to the ground<br><br>You are now in combat! Do 'attack fists' to use your attack with your fists or use a weapon you found earlier.",
        "incombat": true,
        "opt": [],
        "spot": ["unem021110"],
        "isending": false,
        "randomItem": false
    },
    "unem021110": {
        "dia": "In the aftermath of your victory, a stark truth sinks in, the creature you defeated was no mere mortal. Its grotesque form, barely resembling anything human.",
        "opt": ["Option 1: Search the house for valuables"],
        "incombat": false,
        "spot": ["unem0211101"],
        "isending": false,
        "randomItem": false
    },
    "unem0211101": {
        "dia": `You search the house for valuables but find nothing of use to defend yourself but you did find a note that looked to be in James' handwriting. You read it and it says, "I'm leaving to go to the Jack's Storage, I will not be back. I want to be alone." You're perplexed on this very short note, you're also confused about why he didn't tell you either.`,
        "opt": ["Option 1: Search 'empty' houses in your neighborhood", "Option 2: Go to find Jack's Storage"],
        "incombat": false,
        "spot": ["unem02111011", "unemp0"],
        "isending": false,
        "randomItem": false
    },
    "unem02111011": {
        "dia": `You search empty houses near your area and find nothing but already looted houses with nothing of value to hold`,
        "opt": ["Option 1: Continue"],
        "incombat": false,
        "spot": ["unemp01"],
        "isending": false,
        "randomItem": false
    },
    "unemp0": {
        "dia": "You've been searching for multiple hours already and are feeling quite sluggish, maybe James could wait a little bit longer so you could rest and gather your strength in case you need to save him.  Or maybe making him wait any longer could lead to his untimely end.  Do you want to sleep?",
        "opt": ["Option 1: Sleep in an abandoned house", "Option 2: Continue searching for James"],
        "spot": ["unemp01", "unemp02"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
//
    "unemp01": {
        "dia": "You decide to sleep, although James could be in trouble you want to also protect yourself from getting in trouble as well. If you die than James could die with you. The continuation of your search begins now",
        "opt": ["Option 1: Continue"],
        "spot": ["unemp011"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "unemp011" : {
        "dia": "You rise to here an unexpected visitor pounding on the door.  You quickly get out of the bed and prepare yourself to fight.  As the door slowly creaks open you're thankful its just a single undead, nothing you can't handle.<br><br>  You are now in combat! Type 'attack fists' or use another weapon if you found one earlier.",
        "incombat": true,
        "opt": [],
        "spot": ["unemp0111"],
        "isending": false,
        "randomItem": false
    },
    "unemp0111": {
        "dia": "You quickly reassess yourself and realize how much time you wasted.  James could be dead by now, or worse.  It's time to continue searching for Jack's Warehouse.",
        "incombat": false,
        "opt": ["Option 1: Continue"],
        "spot": ["unemp020"],
        "isending": false,
        "randomItem": false
    },
    "unemp02": {
        "dia": "You decide not to sleep, James is more important than sleep. Sleeping could be between James surviving a potential danger or not surviving it. Press Enter to continue",
        "opt": ["Option 1: Continue"],
        "spot": ["unemp020"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "unemp020": {
        "dia": "You've finally found it, Jack's storage. Your eyes lay upon a massive warehouse, Jack's Storage dwarfs even a Home Depot in size. You wonder why James wanted such a ginormous base if it brought all of the dangers of killing so many zombies in such a big building like this.",
        "opt": ["Option 1: Enter Jack's Storage", "Option 2: Search the surrounding area"],
        "spot": ["unemp0201", "unemp0202"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "unemp0202": {
        "dia": "You notice a trail of undead bodies around the backside of the building leading to an armored door.  You believe this could've been James' doing and attempt to open the door but it doesn't budge.  Hopefully the front isn't locked.",
        "opt":  ["Option 1: Enter Jack's Storage through the front"],
        "spot": ["unemp02011"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "unemp0201": {
        "dia": "As you enter it feels like you're still outside, the building is ginormous. It has obvious signs of decay due to neglect but its original glory still shines within.",
        "opt": ["Option 1: Search Jack's Storage"],
        "spot": ["unemp02011"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "unemp02011": {
        "dia": "You found James! However it's not sunshine and rainbows. He's on the ground showing signs of exhaustion and physical injuries. There are a couple of dead zombies around him. You yell his name and hear no response. He seems to show no signs of zombification but there is still a chance...",
        "opt": ["Option 1: See if you can help James", "Option 2: Leave him there"],
        "spot": ["unemp020111", "unemp020112"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "unemp020111": {
        "dia": `You go up to James and see if he is still alive. To your surprise James wakes up in confusion. You ask him what happened and he says "The last thing I remember was fighting some zombies and being really tired." You evaluate his injuries and deem them non-life threatening. You explain how yourself and James need to leave Kentucky because of a radio signal explaining how there is a military base on the outskirts of Muldraugh. You and James leave happily ever after in the military base of Muldraugh :).`,
        "opt": [],
        "spot": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
    },
    "unemp020112": {
        "dia": `You decide to leave James there because you fear that he might be a zombie, James is a tall muscular man and if he were to be a zombie you would be in a lot of danger. After you leave Jack's Storage you head to the military base on the outskirts of Muldraugh to seek refuge from the ongoing apocalypse`,
        "opt": [],
        "spot": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
    },

    "unemhome": {
        "dia": "after recieving radio silence from James you decide it would be best to go back home.",
        'opt': ["Option 1: Continue"],
        'spot': ['home'],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spifhome": {
        "dia": `You realized that you don't get paid enough to deal with the zombie uprising.`,
        'opt': ["Option 1: Continue"],
        'spot': ['home'],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },

    "stuhome": {
        "dia": `You think your chance of survival is better on your own and walk back to your house.  The streets are now sparsely populated with undead shambling mindlessly.  When you  get home you open your map and decide where to go.`,
        "opt": ["Option 1: Continue"],
        'spot': ['home'],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    // all the continues above should lead to home
    "home": {
        "dia": `You arrive back at home, you can't stay here though.  You look at your map and four locations stand out to you.  Where do you go?`,
        "opt": ["Option 1: Go to the school", "Option 2: Go to the local diner, Spiffo's", "Option 3: Head to your stockpiling friend James' House"],
        "spot": ["stualt", "spifalt", "unem02"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },//1 ->gostu    2 spifalt

    // spif
    "spif0": {
        "dia": `"The date is July 2, 1993. Your day begins like any other as you set out for your job at Spiffo's, the local diner. However, as you walk, an eerie silence pervades the streets, broken only by the sight of abandoned cars lining the roads. No signs of life are to be found anywhere.
        Approaching Spiffo's, you enter through the backdoor, expecting the usual bustling activity. Instead, you find the diner eerily deserted, with not a soul in sight. Your attention is drawn to a hanging TV, flickering with the image of a news reporter.
        "Good morning, Kentucky. This is Veronica Hayes reporting for Channel 7 News. We are receiving unconfirmed reports of an airborne virus infecting the city of Louisville. Those infected are said to be exhibiting violent behavior," the reporter's voice fades as the channel turns to static. You stand still thinking about what the reporter just said before looking out the front window and seeing a car pull into the handicap stall.  You aren't sure whether you should hide or try to approach the stranger.`,
        "opt": ["Option 1: Go outside <br>", "Option 2: Hide in the freezer <br>", "Option 3: You've seen enough, run back home"],
        "spot": ["spif01", "spif02", "spifhome"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spifalt": {
        "dia": `You walk into Spiffo's through the front door then walk behind the counter viewing their selection of food.  After grabbing a combo that was left in a to-go bag you sit down and enjoy your cold meal before hearing a car pull into the parking lot.  What will you do?`,
        "opt": ["Option 1: Go outside", "Option 2: Hide in the freezer"],
        "spot": ["spif01", "spif02"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif01": {
        "dia": `You walk outside to talk to the only person you've seen today.  As you open the front door you see a man step out of the car in camo military clothes and an old gas mask.  He's quick to walk over and place another gas mask in your hand and say "Put this on, I don't know how you've managed to survive without one."  You rub the lens of the mask before strapping it around your head.`,
        "opt": ["Option 1: Ask where everyone went", "Option 2: Ask if you can ride along with him"],
        "spot": ["spif011", "spif012"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif02": {
        "dia": `As you walk inside of the freezer the door slams behind you, locking from the outside.  Your co-workers can't help you this time.  As you sit down and fall asleep you wonder what could've been if you made better choices.`,
        "spot": [],
        "opt": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
    },
    "spif011": {
        "dia": `"Ever since the event in Louisville yesterday most people were quarantining inside their homes, didn't seem to help though." He pauses for a moment before pulling out a photo card showing a man who looks like a corpse with parts of his skin falling off, "You see, almost everyone exposed to the air here passed away but their bodies stayed alive.  They're feral instincts must've kicked in because they try to eat anything they see, including us.`,
        "opt": ["Option 1: Ask if you can ride along with him"],
        "spot": ["spif012"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif012": {
        "dia": `"Well our chances are probably better together.  I can't think too well on an empty stomach so lets load up and I'll share my story in the car." The man walks inside of Spiffo's and grabs some food out of the fridge before walking back to the car and gesturing for you to get in.`,
        "opt": ["Option 1: Get in the car"],
        "spot": ["spif0121"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif0121": {
        "dia": `"We're headed to the police station, before all of this the military set up a research camp to develop a cure, which we want.  Long story short someone got infected inside and it rapidly spread.  I was actually the only survivor thanks to this here." He points as his mask then continues, "It seems that some people are also just immune to it such as yourself.  The only others that I saw were surrounded by a horde in Muldraugh High." The car comes to a halt on the side of the road, you see that you stopped right before the police station.  "Here's our stop." He says before grabbing a combat knife out of the glovebox and stepping out of the car.`,
        "opt": ["Option 1: How are we going to get in?"],
        "spot": ["spif01211"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif01211": {
        "dia": `I see three different ways.  We can enter through the front which will likely require fighting some of those freaks.  We could enter through the back which might save us some trouble.  Or finally, we could take the ladder and enter through the roof.  It's your choice, so choose wisely.`,
        "opt": ["Option 1: Why not, let's fight through the front.", "Option 2: I'll bet the back will be safe.", "Option 3: The roof seems like the smartest choice."],
        "spot": ["spif012111", "spif012112", "spif012113"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif012111": {
        "dia": `"Might be a dumb choice, but I respect your decision."  You and the man walk towards the front entrance, you open the door to see multiple zombies in your way.  Hopefully your partner puts that knife to good work.<br><br>
        You are now in combat! Do 'attack fists' to use your attack with your fists or use a weapon you found earlier.`,
        "opt": [],
        "spot": ["spif0121111"],
        "incombat": true,
        "isending": false,
        "randomItem": false
    },
    "spif0121111": {
        "dia": `After you barely end a single zombie you see that the man flawlessly executed 2 others.  "Not ideal, but it's alright.  The cures in the room to the right, search for the vial number 1.81 and I'll radio the helicopter in.`,
        "opt": ["Option 1: Search for the vial"],
        "spot": ["spif0121121"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif012112": {
        "dia": `"Alright I'll take the lead" You follow the man as he sneaks behind the building without drawing the attention of any undead, you get to the back door and he pulls a key off his belt and opens it.  "The research is in this room to the left" the man whispers to you before discreetly turning the handle and entering the room. "Look for the vial number 1.81 I'll radio in for the helicopter`,
        "opt": ["Option 1: Search for the vial"],
        "spot": ["spif0121121"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif012113": {
        "dia": `You stick with your gut and decide to scale the building.  You seem to almost forget your fear of heights until you reach the top of the ladder.  You look down and feel intense nausea before losing your grip and falling. unfortunately your chances of surviving a zombie apocalypse don't seem very high with a broken leg, especially when you don't have any crutches or a cast. This is how you died...`,
        "opt": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
    },
    "spif0121121": {
        "dia": `You search through the cupboard filled with vials realizing that they're ordered in a pattern.  You look to row 8 and grab the first vial, numbered 1.81.  You hear the man say something into the police radio across the room.  He then walks over and confidently shares "The helicopter'll be here in 10 minutes, we gotta get up to the helipad on the roof.`,
        "opt": ["Option 1: Let's get moving"],
        "spot": ["spif01211211"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif01211211": {
        "dia": `As you and the man rush to the rooftop helipad, the silence of the deserted building is broken by the sound of growls and screams. The infected have caught your scent and are in closing in. You both sprint up the stairs, the vial gripped in your hand.  Reaching the roof, you can hear the distant whirl of the helicopter blades cutting through the air. But the infected are closing in fast, their sound almost drowning out that of the helicopter as they swarm the building.`,
        "opt": ["Option 1: Block the door ", "Option 2: Prepare to fight"],
        "spot": ["spif012112111", "pif012112112"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif012112111": {
        "dia": `You look around for anything to barricade the door and decide to grab the conveniently positioned sand bags that the military positioned around the roof.  After stacking the last bag onto the door you hear the roars of the undead on the other side as they begin throwing themselves against the door.  The helicopter swiftly descends onto the roof.`,
        "opt": [`Climb aboard the helicopter`],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "spif012112112": {
        "dia": `The undead quickly rise the stairs and throw themselves against the door.  The lock doesn't hold very long and the door swings open and multiple zombies flood out.  You can hear the whirl of the helicopter blades getting closer behind you but first these zombies will have to be dealt with.<br><br>
        You are now in combat! Do 'attack fists' to use your attack with your fists or use a weapon you found earlier.`,
        "opt": [``],
        "spot": ["spif0121121111"],
        "incombat": true,
        "isending": false,
        "randomItem": false
    },// leads to spif0121121111
    "spif0121121111": {
        "dia": `As the helicopter lands, you and the man rush to meet it, the relentless pounding of the infected against the door intensifying with each moment. The pilot beckons you aboard, his expression one of urgency. You quickly scramble into the helicopter, the man right behind you.
        With the door sealed shut, the pilot lifts off just as the door bursts open, and the rooftop becomes overrun with the infected. You watch as the rooftop falls away, your heart pounding in relief and fear. The city below, once familiar, now looks like a war zone, the infected spreading like a dark cloud.
        You grip the vial tightly, knowing that the fate of countless lives rests in your hands. The man pats your shoulder reassuringly, and you exchange a determined glance. Together, you face the uncertain future, hopeful that the potential cure you carry can bring an end to the horror that has befallen your world.`,
        "incombat": false,
        "isending": true,
        "randomItem": false
    },

    //student

    "stu0": {
        "dia": `The date is July 2, 1993. You find yourself trudging towards Muldraugh High, the local high school, where you're enrolled in a summer math class, a consequence of not quite making the grade to graduate. The morning air feels heavier today, devoid of the usual chatter and bustle of a typical summer morning. Abandoned cars litter the streets, their once-shiny surfaces now dulled by neglect.
        Entering the school's cafeteria to grab a quick breakfast, you notice a small gathering near the TV in the corner. Your classmates and teacher are huddled around, their faces etched with concern. You catch the tail end of a news report, the reporter's voice tinged with urgency.
        "Good morning, Kentucky. This is Veronica Hayes reporting for Channel 7 News. We are receiving unconfirmed reports of an airborne virus infecting the city of Louisville. Those infected are said to be exhibiting violent behavior," the news anchor's words hang in the air before the screen abruptly switches to static, leaving a palpable sense of unease in the room.`,
        "opt": ["Option 1: Continue"],
        "spot": ["stu01"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "stu01": {
        "dia": `Your teacher, Mr. White, wears a puzzled expression as he gathers his thoughts before addressing the class. "Class is canceled," he announces, his voice betraying his unease. "I can't possibly focus on teaching with this hanging over us. I'll see you all on Monday." With a heavy sigh, he heads towards the exit leading to the parking lot.
        As Mr. White reaches for the door handle, a sudden commotion erupts. An undead creature lunges at him, its grip tight around his arm. Panic fills the room as your classmates react, one rushing to intervene. With a swift stomp, they dispatch the attacker, but it's too late. Mr. White lies on the floor, his breaths labored.
        Summoning his last ounces of strength, Mr. White directs his words to the nearest student. "Take the bus," he urges, his voice strained. "Get out of here while you still can." Using his last bit of strength he reaches into his pocket and grabs a set of keys offering them to the student.`,
        "opt": ["Option 1: Look outside to the parking lot", `Option 2: "I'm not dying with the rest of you" (leave)`], //leave should lead to stuhome
        "spot": ["stu011", "stuhome"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "stualt": {
        "dia": ` You enter the school cafeteria, ""Hey, you!" a student exclaims, their voice tinged with desperation. "We need your help. The bus, it's out there and we can escape, but it's surrounded by those... things."
        Their eyes flicker towards the exit, fear evident in their gaze. "We can't make it out there alone. We need someone to cover us while we make a run for it. Please, we don't stand a chance without you."
        Their plea is desperate, and you can sense the gravity of the situation weighing heavily on them. It's clear that the safety of everyone depends on your decision to assist them in this perilous task.`,
        "opt": ["Option 1: Continue"],
        "spot": ["stu011"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },

    "stu011": {
        "dia": `The Bus outside is surrounded by zombies, clearly too many for your small group to take out`,
        "opt": [`Option 1: "I'll distract the zombies, the rest of you can get into the bus and escape"`, `Option 2: Look for another car to trigger the alarm on`],
        "spot": ["stu0111", "stu0112"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    }, // 0113 should go to stuhome
    "stu0111": {
        "dia": `With a mixture of heroism and recklessness, you burst through the door, drawing the attention of the encroaching zombies with your shouts. Swiftly, you make your way to the parking lot gate, urging your classmates to follow as you open it for them, adrenaline coursing through your veins.
        As the others scramble towards safety, you turn to glance behind you, catching a glimpse of the survivors starting up the bus. But your moment of triumph is short-lived as you lose your footing, stumbling in your haste. The zombies close in swiftly, their grasping hands reaching out for you.
        With a sinking feeling, you realize the inevitable as the undead swarm around you, overwhelming your defenses. The world fades into darkness as you succumb to their grasp. Yet, in your final moments, a sense of bittersweet satisfaction washes over you as you catch sight of the bus escaping to safety, knowing that your sacrifice was not in vain`,
        "opt": [],
        "spot": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
        //ending
    },
    "stu0112": {
        "dia": `As you cautiously approach a solitary sedan nestled in the far corner of the parking lot, your heart skips a beat as you spot a motionless figure sprawled next to the car door. A sense of dread washes over you as you realize it's a zombie lying in wait, ready to pounce at any moment.
        With no other choice but to confront the undead threat, you steel yourself for the impending battle. Adrenaline surges through your veins as you prepare to face the creature head-on, knowing that your survival depends on your ability to fight off this unexpected foe.<br><br>
        You are now in combat! Do 'attack fists' to use your attack with your fists or use a weapon you found earlier.`,
        "opt": [],
        "spot": ["stu01121"],
        "incombat": true,
        "isending": false,
        "randomItem": false
    },
    "stu01121": {
        "dia": `After you finish off the zombie you notice that he must've passed while trying to get in his car as the keys are still in the door.  You open the door and rig the horn to continuously honk before sneaky away again back to the others.  One of them says "What about the gate? It's still closed."`,
        "opt": [`Option 1: I guess I'll go open it`, `Option 2:We can slam through it with the bus`],
        "spot": ["stu011211", "stu011212"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "stu011211": {
        "dia": `You sneak over to the gate and lift the latch, possible inviting more undead in.  You then return to the bus and are last to climb aboard.`,
        "opt": ["Option 1: Continue"],
        "spot": ["stu0112111"],
        "incombat": false,
        "isending": false,
        "randomItem": false

    },//goes to 0112111
    "stu011212": {
        "dia": `Everyone climbs inside the school bus.  The driver shouts "SEATBELTS!" before starting the engine and pressing the gas and breaking down the gate.`,
        "opt": ["Option 1: Continue"],
        "spot": ["stu0112111"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },//goes to 0112111
    "stu0112111": {
        "dia": `As you board the bus you take a seat next to your classmates, Peyton, his eyes wide with fear and urgency.  "My grandpa's got this ranch out in the countryside," Peyton continues, his words rushed. "He's been talking about it for ages, saying he's got this bunker stocked with supplies. We could head there, hunker down until all this blows over."
        The idea of safety and supplies is enticing, but uncertainty clouds your mind. `,
        "opt": [`Option 1: "Lets go for it"`, `Option 2:"I think It'd be best if we left town"`],
        "spot": ["stu01121111", "stu01121112"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "stu01121111": {
        "dia": `As the bus rattles down the desolate streets, the sight of abandoned cars and scattered wreckage serves as a grim reminder of the chaos that has consumed the city. Undead figures roam the sidewalks, their relentless groans echoing through the empty thoroughfares.  As the driver pulls into the ranch everyone sees the police car sitting in the middle of the ranch with its sirens wailing, undead shambling towards it.  The students quickly get off the bus and run inside the building, with just you and Peyton remaining near the exit.  Scrambling for an idea Peyton remarks "the bunkers behind the barn, we have to get past without those zombies seeing us, and it looks like the others won't be joining."`,
        "opt": ["Option 1: Walk Behind the barn"],
        "spot": ["stu011211111"],
        "incombat": false,
        "isending": false,
        "randomItem": false

    },
    "stu011211111": {
        "dia": `As you cautiously approach the bunker door, Peyton swiftly moves to unlock it, his hands deftly spinning the wheel in an urgent rhythm. However, the sound of metal against metal echoes through the air, drawing the attention of nearby zombies. With a sinking feeling, you realize that you must defend Jake while he works to open the bunker, or risk being overwhelmed by the advancing undead horde.<br><br>
        You are now in combat! Do 'attack fists' to use your attack with your fists or use a weapon you found earlier.`,
        "opt": [],
        "spot": ["stu0112111111"],
        "incombat": true,
        "isending": false,
        "randomItem": false
    },
    "stu0112111111": {
        "dia": `As the solitary zombie crumples to the ground, defeated, you catch your breath, relief flooding your senses. But the moment of calm is short-lived as the sound of hurried footsteps echoes from the house behind you. Your classmates emerge, drawn by the commotion, their eyes wide with fear and determination.
        With a shared sense of purpose, you rally together, standing as a united front against the encroaching horde. With each swing of your weapons and every well-placed strike, you push back the relentless tide of undead, your classmates fighting fiercely by your side.
        As the last zombie falls, you share a collective sigh of relief, the air thick with exhaustion and adrenaline. But there's no time to dwell on victory as you hastily make your way towards the bunker entrance, your classmates following close behind.
        Inside the bunker, a wave of relief washes over you as you take in the sight of shelves stocked with supplies, enough to sustain you and your companions for at least a month. The tension that had gripped your shoulders eases, replaced by a sense of cautious optimism for the days ahead.
        Gathering together in the safety of the bunker, you find solace in each other's company, knowing that you are not alone in this fight for survival. As you settle in for the night, the faint hum of the bunker's generators lulling you into a restless sleep, you can't help but feel a glimmer of hope amidst the darkness that surrounds you.`,
        "isending": true,
        "incombat": false,
        "opt": [],
        "spot": [],
        "randomItem": false
    },//ending
    "stu01121112": {
        "dia": `Shortly after you respond, the bus driver shouts "I don't know how to operate this thing! Does anyone have a licence?"  You watch for a moment as no one offers, so you're forced to take up the mantle.`,
        "opt": ["Option 1: Drive to the main road", "Option 2: rethink your decision and head to Peyton's ranch"],
        "spot": ["stu011211121", "stu01121111"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },//2 -> stu01121111
    "stu011211121": {
        "dia": `As you maneuver down the main street, you can't ignore the sight of abandoned cars littering the road, creating a tangled mess. Military tents are scattered around an intersection, adding to the chaos. As you carefully navigate around the rubble, a sudden impact rocks the bus, sending it lurching to the side. The screeching of metal fills the air as a military pickup truck slams into the bus, flipping it onto its side with a jolt that sends everyone inside reeling.  Everything around you fades to black as your ears start ringing.  You wake up to see everyone around you missing, however the military truck sits empty next to you.`,
        "opt": ["Option 1: Walk Away", "Option 2: Search the truck"],
        "spot": ["stu0112111211", "stu0112111212"],
        "incombat": false,
        "isending": false,
        "randomItem": false
    },
    "stu0112111211": {
        "dia": `You shamble away, still effected by your wounds.  You don't know how you'll do it but your still determined to get out of town with your life intact, however without your strength or any tools this goal seems unlikely.`,
        "opt": [],
        "spot": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
    },
    "stu0112111212": {
        "dia": `You pry open the back door of the truck, revealing a stash of weapons and medical supplies. Amid the chaos, you quickly assess your options and select the best weaponry available, ensuring you're armed for the challenges ahead. After grabbing some much-needed bandages, you tend to your wounds, patching yourself up as best as you can. With newfound determination, you set out once more on your journey to escape the town, ready to face whatever lies ahead.`,
        "opt": [],
        "spot": [],
        "incombat": false,
        "isending": true,
        "randomItem": false
    },

}
// first value in list is damage, second value is defense, third value is hit chance
const itemnames = ["fists", "bat", "knife", "pencil", "katana", "crowbar", "axe"]
const items = {
    "fists": [2, 1, 1],
    "bat": [3, 3, 1],
    "knife": [3, 2, 1],
    "pencil": [1, 1, 5],
    "katana": [6, 6, 0],
    "crowbar": [4, 2, 1],
    "axe": [4, 2, 1]
}

let inv = {
    "items": ["fists"]
}



function start() {
    let start = document.getElementById("start");
    start.classList.add("hidden");
    let input = document.getElementById("userInputForm");
    input.classList.remove("hidden");
    let textarea = document.getElementById("consoleOutput");
    textarea.classList.remove("hidden");

    document.getElementById('consoleOutput').classList.remove('hidden')
}
// player health points
let php = 8;
// player attack level, rewritten if player has uses weapon
let attkLev = 1;
// player defense level, rewritten if player has uses weapon
let defLev = 1;
// player miss level, rewritten if player has uses weapon
let misslev = 1;
// turn num uses modulo to determine if enemy or player is attacking (turnbased combat)
let turnNum = 0;
// if true than initiate combat
let incombat = false;
// enemy health points
let ehp = 8;
// spot determines what dialogue and options are displayed
let spot = "unem0";
// if true than show dialogue for when an enemy misses
let ismissE = false;
// if true than show dialogue for when an player misses
let ismissP = false;
// all three vars below determines what main story the player goes to
let ischef = false;
let isstu = false;
let isunem = false;
// checks that player doesn't have an occupation so they can be placed in the correct starting position later

let issleep = false;

document.addEventListener("DOMContentLoaded", function () {
    // returns a random item, for searching houses/areas
    // it's in dom because if it's out of it than there's a chance for it to return nothing for some reason
    function randomItem() {
        let item = "fists";
        while (item === "fists") {
            for (let i = 0; i < Math.floor(Math.random() * itemnames.length); i++) {
                item = itemnames[i]
                console.log(i)
            }
        }
        return item
    }

    console.log(randomItem())

    let output = "";
    let occupation = 0;
    let combatstatus = 0;
    let classname = "";
    let idval = 1;

    fetch('title.txt').then(response => response.text()).then(text => title1.innerHTML = text)
    fetch('asciiart.txt').then(response => response.text()).then(text => asciimenuart.innerHTML = text)

    document.getElementById('userInputForm').addEventListener('submit', function (eventData) {
        eventData.preventDefault();
        document.getElementById('instr').classList.add('hidden')
        if (occupation === 0) {
            output = (`Choose Your Occupation & Starting Position<br><br>Student - Muldraugh High<br>
Chef - Spiffo's (An American Fast Food Restaurant)<br>
Unemployed - A House in Muldraugh<br><br>

To attack an enemy type 'attack (weapon)'<br>
Text input is not case sensitive<br>
Making choices in the story can be done by typing the number associated with them. <br>
For example, if the text says "Choice 1: Go home" you would enter "1" to go home.<br><br>

Type 'help' to see these instructions again.`)
        };
        let input = document.getElementById("userInput").value;
        document.getElementById('userInput').value = '';
        input = input.toLowerCase()

        // if (input === "help") {
        //     output = (`To see your inventory type 'inventory<br>To attack an enemy type '(weapon of choice) attack'<br>
        //     Also all text input is NOT case sensitive so the text 'HELLO' and 'hello' are the same.<br>
        //     Everytime you progress in the story there will be options at the bottem of the text, type the number that corresponds with that option. (option 1 would be '1')`)
        // }
        if (input === "help") {
            output = (`To attack an enemy type 'attack (weapon)'<br>
            Text input is not case sensitive<br>
            Making choices in the story can be done by typing the number associated with them. <br>
            For example, if the text says "Choice 1: Go home" you would enter "1" to go home.`)
        }

        if (input == "unemployed" && occupation === 0) {
            output = (story.unem0.dia) + "<br>" + (story.unem0.opt)
            occupation = 1;
            isunem = true
        }
        if (input == "chef" && occupation === 0) {
            output = (story.spif0.dia) + "<br>" + (story.spif0.opt)
            occupation = 2;
            ischef === true
        }
        if (input == "student" && occupation === 0) {
            output = (story.stu0.dia) + "<br>" + (story.stu0.opt)
            occupation = 3;
            isstu === true
        }

        function combat(eattkLev, edefLev, emissLev, userInput) {
            let combatOutput = ""
            let damagedealtp = 0;
            let damagedealte = 0;

            incombat = true
            let inputArray = userInput.split(' ');
            console.log(inputArray)
            if (inputArray[0] === "attack" && incombat === true) {
                turnNum += 1;
                let itemusing = "";
                for (let i = 0; i < inv.items.length; i++) {
                    if (inputArray[1] === inv.items[i]) {
                        itemusing = inputArray[1]
                        attkLev = items[itemusing][0]
                        defLev = items[itemusing][1]
                        misslev = items[itemusing][2]
                    }
                }
                console.log(itemusing)
                if ((turnNum % 2 === 0) && Math.floor((Math.random() * (emissLev + 1))) === 0) {
                    damagedealtp = (eattkLev / defLev).toFixed(2)
                    console.log(eattkLev / defLev)
                    combatOutput = "The zombie did " + damagedealtp + " damage to you!"
                    ismissE = false;
                } else if (turnNum % 2 === 0) {
                    output = "Zombie Missed!"
                    ismissE = true;
                } else if ((Math.floor(Math.random() * (misslev + 1)) === 0)) {
                    damagedealte = (attkLev / edefLev).toFixed(2)
                    combatOutput = ("You did " + damagedealte + " damage on the zombie!<br>The zombie now has " + ehp + " health!")
                    ismissP = false
                } else {
                    output = "You missed.  Type 'attack' to continue."
                    ismissP = true
                }


                if (ehp <= 0) {
                    combatOutput = "You've defeated the zombie!"
                    incombat = false
                } else if (php <= 0) {
                    combatOutput = "This is how you died..."
                    setTimeout(function () {
                        location.reload();
                    }, 5000);
                }

            }
            console.log(ehp)

            return ([damagedealtp, damagedealte, combatOutput])
        }

        // updates combat so it displays
        function updateCombat(combatfunc, outputvar) {
            console.log(combatfunc)
            php -= combatfunc[0];
            ehp -= combatfunc[1];
            output = outputvar
            if (php <= 0) {
                output = "This is how you died...";
                incombat = false;
            } else if (ehp <= 0) {
                output = "You've defeated the zombie!";
                incombat = false;
            }

        }
        // starts combat
        function startcombat(eattkLev, edefLev, emissLev, goto, enddia) {
            if (incombat === true) {
                let attacklist = combat(eattkLev, edefLev, emissLev, input);
                updateCombat(attacklist, attacklist[2])
                console.log(attacklist)

                console.log('php: ' + php)
                console.log('ehp: ' + ehp)
                console.log('attk: ' + attkLev)
                console.log('def: ' + defLev)

                console.log(ehp - parseInt(attacklist[1]))

                console.log("turn num: " + turnNum)

                if ((turnNum % 2 != 0) && ismissP === false) {
                    output = ("You did " + attacklist[1] + " damage on the zombie!<br>The zombie now has " + (ehp - attacklist[1]) + " health! <br> Type attack to continue."); 3
                } else if ((turnNum % 2 === 0) && ismissE === false) {
                    output = "The zombie did " + attacklist[0] + " damage to you! You now have " + php + " health!<br> Type 'attack (weapon of choice)' to continue"
                } else if (ismissE === true) {
                    output = "The zombie missed. Type 'attack (weapon of choice)' to continue"
                } else if (ismissP === true) {
                    output = "You missed. Type 'attack' to continue."
                }


                if (php <= 0) {
                    output = "You were defeated...";
                    incombat = false;
                } else if (ehp - attacklist[1] <= 0) {
                    output = "You've defeated the zombie. " + story[story[spot].spot[0]].dia + "<br>" + story[story[spot].spot[0]].opt.join("<br>");
                    incombat = false;
                    spot = goto
                    ehp = 8;
                }
            }
        }
        // if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else if else 
        // unemployed
        // chef
        function isend(spot1, innum) {
            output = story[story[spot1].spot[innum - 1]]
            output = output.dia
            console.log(output)
            // why, just why.
            if (story[story[spot1].spot[innum - 1]].isending === true) {
                fetch('gameover.txt').then(response => response.text()).then(text => title1.innerHTML = text)
                setTimeout(function () {
                    location.reload();
                }, 15000);
            }
        }

        function giveWeapon() {
            inv.items[inv.items.length] = randomItem()
            console.log(inv.items[inv.items.length - 1])
            // let x = document.getElementById("invDisplay");
            // console.log(x)
            // let option = document.createElement("option");
            // option.text = inv.items[inv.items.length - 1];
            // x.add(option);
            // return option.text
        }



        if (occupation != 0) {
            if (isunem === false && occupation === 1) {
                spot = "unem0"
                isunem = true
            } else if (ischef === false && occupation === 2) {
                spot = "spif0"
                ischef = true
            } else if (isstu === false && occupation === 3) {
                spot = "stu0"
                isstu = true
                console.log("bruh")
            }

            console.log(spot)

            let weaponout = ""


            if (input === "1") {
                console.log(story[spot])
                isend(spot, 1)


                spot = story[spot].spot[0]

                console.log(spot)

                output = story[spot].dia + "<br>" + story[spot].opt.join("<br>");

            } else if (input === "2") {
                console.log(story[spot])
                isend(spot, 2)
                console.log(output)

                spot = story[spot].spot[1]

                console.log(spot)
                output = story[spot].dia + "<br>" + story[spot].opt.join("<br>");



            } else if (input === "3") {
                console.log(story[spot])
                isend(spot, 3)
                console.log(output)

                spot = story[spot].spot[2]

                console.log(spot)
                output = story[spot].dia + "<br>" + story[spot].opt.join("<br>");



            } else if (input === "4") {
                console.log(story[spot])
                isend(spot, 4)
                console.log(output)

                spot = story[spot].spot[3]

                console.log(spot)
                output = story[spot].dia + "<br>" + story[spot].opt.join("<br>");

            } else if (story[spot].incombat === true) {
                output = story[spot].dia
                console.log(output)
                incombat = true;
                startcombat(1, 1, 1, story[spot].spot[0], story[spot].dia)
            }
            if (story[spot].randomItem === true) {
                giveWeapon()
                weaponout = inv.items[inv.items.length - 1]

                output = "You search for a weapon and find a " + weaponout + "<br>Option 1: Continue"
                console.log(inv.items)
            }
        }






        if ((idval % 2) != 0) {
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color: #294652 ; color: rgb(255, 255, 255);">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        } /* white and black */
        else {
            document.getElementById("consoleOutput").innerHTML = `<p style="background-color: #713535; color: rgb(255, 255, 255);">` + output + `</p>` + document.getElementById("consoleOutput").innerHTML;
        }   /* dark red & white */
        idval += 1;
    })

    // document.getElementById('combatForm').addEventListener('submit', function (eventData) {
    //     eventData.preventDefault();
    //     console.log(document.getElementById('attk').value)
    // });
});

