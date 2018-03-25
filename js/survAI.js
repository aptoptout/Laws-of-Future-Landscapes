var ai_questions = [
    {
        "time": "07:30",
        "title": "morning time",
        "questions": {
            "00.01":{
                "title": "BEEP. BEEP. BEEP. BEEP. You alarm clock goes off",
                "text": "Would you like some extra help to make sure you get out of your bed on time?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, would be helpfull to have some help getting out on time",
                        "tag": "pro",
                        "note": "As your alarm keeps ringing and you keep snoozing, a slowly illuminating light lights up in your room. As only two minutes pass you wake up.",
                        "next": "00.02"
                    },
                    {
                        "type": "no",
                        "text": "No, I always get up on time",
                        "tag": "netural",
                        "note": "As your alarm is ringing you get up and turn off your alarm.",
                        "next": "00.03"
                    },
                    {
                        "type": "no",
                        "text": "No, if I want to snooze, I want to snooze",
                        "tag": "Con",
                        "note": "As your alarm keeps ringing, you keep snoozing. <br>5 minutes pass.<br>10 minutes pass.<br>15 minutes pass.<br>20 minutes pass.<br>SNAP, you are getting late for work!",
                        "next": "00.04"
                    }
                ]
            },
            "00.02":{
                "title": "As you woke up and got out of bed",
                "text": "Do you want your waking up sequence to turn off automatically?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, let the system recognize when I'm awake",
                        "tag":  "User",
                        "note": "*Alarm sequence turned off when you got out of bed.",
                        "next": "00.03"
                    },
                    {
                        "type": "no",
                        "text": "No, I'll put it off just by hand.",
                        "tag":  "Operator",
                        "note": "You walk to your alarm and turn off the alarm sequence.",
                        "next": "00.03"
                    }
                ]
            },
            "00.03":{
                "title": "You just got out of bed and need to get ready for work.",
                "text":  "You are still in your bedroom, what is your morning ritual?",
                "action": null,
                "answers":[
                    {
                        "type": "option",
                        "text": "Take shower, Eat breakfast, Put on clothes",
                        "tag":  "NoData",
                        "note": null,
                        "next": "00.03.1"
                    },
                    {
                        "type": "option",
                        "text": "Eat breakfast, Put on clothes",
                        "tag":  "NoData",
                        "note": null,
                        "next": "00.03.4"
                    }

                ]
            },
            "00.03.1":{
                "title": "You are ready to take a shower.",
                "text": "Did your shower already got turned on and heated up automatically while you got up?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, saves me some time and effort",
                        "tag":  "Pro,User",
                        "note": null,
                        "next": "00.03.2"
                    },
                    {
                        "type": "no",
                        "text": "No, just I can just as easy do it myself",
                        "tag":  "Con,Operator",
                        "note": null,
                        "next": "00.03.2"
                    }

                ]
            },
            "00.03.2":{
                "title": "You cannot wait to get some coffee.",
                "text": "Should your coffee be ready when you get to the kitchen?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be great",
                        "tag":  "User",
                        "note": null,
                        "next": "00.03.3"
                    },
                    {
                        "type": "no",
                        "text": "No, I really want to brew it myself",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.03.3"
                    },
                    {
                        "type": "no",
                        "text": "No, I do not drink coffee",
                        "tag":  "NoData",
                        "note": null,
                        "next": "00.03.3"
                    }
                ]
            },
            "00.03.3":{
                "title": "Surely you also need some breakfast, you're thinking, as you hear your stomach growl like a bear.",
                "text": "Would you like your breakfast to be delivered according to your shopping and eating history?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be great",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "00.03.4"
                    },
                    {
                        "type": "yes",
                        "text": "Yes,  breakfast service sounds good, but not according too some profile",
                        "tag":  "Pro, Operator",
                        "note": null,
                        "next": "00.03.4"
                    },
                    {
                        "type": "no",
                        "text": "No, I just buy complete breakfasts",
                        "tag":  "Con, User",
                        "note": null,
                        "next": "00.03.4"
                    },
                    {
                        "type": "no",
                        "text": "No, I really want to do it myself",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "00.05"
                    }
                ]
            },
            "00.03.4":{
                "title": "Your clothes, your style.",
                "text": "Should your clothes by automatically picked?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be great",
                        "tag":  "User",
                        "note": null,
                        "next": "00.05"
                    },
                    {
                        "type": "no",
                        "text": "No, I really want to do it myself",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.05"
                    }
                ]
            },
            "00.04":{
                "title": "You are late for work",
                "text": "Your appointments are jeopardised by your delay, do you want to automatically reschedule them?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be great",
                        "tag":  "pro,user",
                        "note": null,
                        "next": "00.04.2"
                    },
                    {
                        "type": "no",
                        "text": "No, I really want to do it myself",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "00.05"
                    }
                ]
            },
            "00.04.2":{
                "title": "Your schedule has been automatically re-adjusted according to your delay.",
                "text": "Would you like to have an automated message send to your work that you are running late?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, then I can just focus to get to work",
                        "tag":  "user,pro",
                        "note": null,
                        "next": "00.04.3"
                    },
                    {
                        "type": "no",
                        "text": "No, I really want to type it myself",
                        "tag":  "operator,con",
                        "note": null,
                        "next": "00.05"
                    }
                ]
            },
            "00.04.3":{
                "title": "Your schedule has been automatically re-adjusted according to your delay.",
                "text": "Do you want to implement the reason of your delay in your automated message?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "user,pro",
                        "note": null,
                        "next": "00.05"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "con,Operator",
                        "note": null,
                        "next": "00.05"
                    }
                ]
            },
            "00.05":{
                "title": "You are ready for your day.",
                "text": "What would your favorite working space be, regardless of your job?",
                "action": null,
                "answers":[
                    {
                        "type": "option",
                        "text": "Office",
                        "tag":  "NoData",
                        "note": null,
                        "next": "01.00.0"
                    },
                    {
                        "type": "option",
                        "text": "Studio, shared with others",
                        "tag":  "NoData",
                        "note": null,
                        "next": "01.00.0"
                    },
                    {
                        "type": "option",
                        "text": "At home",
                        "tag":  "NoData",
                        "note": null,
                        "next": "00.05.1"
                    },
                    {
                        "type": "option",
                        "text": "Cafe, coffeehouse",
                        "tag":  "NoData",
                        "note": null,
                        "next": "01.00.0"
                    }
                ]
            },
            "00.05.1":{
                "title": "Ah, you like to work at home! Nice and comfortable, surrounded by your own stuff.",
                "text": "How would you like to talk to this business partner",
                "action": "You take something to drink and take a seat behind your desk. You first have to talk to a <br>business partner.",
                "answers":[
                    {
                        "type": "option",
                        "text": "Go to this person and meet somewhere",
                        "tag":  "Con",
                        "note": null,
                        "next": "01.00.0"
                    },
                    {
                        "type": "option",
                        "text": "Talk over the phone",
                        "tag":  "Con",
                        "note": null,
                        "next": "00.05.2"
                    },
                    {
                        "type": "option",
                        "text": "Videochat",
                        "tag":  "Pro",
                        "note": null,
                        "next": "00.05.3"
                    },
                    {
                        "type": "option",
                        "text": "Meet up in a digital environment, like secondlife",
                        "tag":  "Pro",
                        "note": null,
                        "next": "00.05.3"
                    }
                ]
            },
            "00.05.2":{
                "title": "You call your business partner over the phone.",
                "text": "Would you like to record this conversation as you are calling?",
                "action": "You have quiet some stuff to discuss and talk about. And afterwards there might be more people involved who need to get notified about this conversation.",
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag":  "pro",
                        "note": null,
                        "next": "00.05.3"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag":  "con",
                        "note": null,
                        "next": "00.05.4"
                    }
                ]
            },
            "00.05.3":{
                "title": null,
                "text": "Would you like to fill your agenda automatically when there are new appointments or deadlines made?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag":  "User",
                        "note": null,
                        "next": "00.05.4"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.05.5"
                    }
                ]
            },
            "00.05.4":{
                "title": "As you discuss further it becomes clear that there should be people emailed about the new developments.",
                "text": "Do you want to automatically generate messages when the name and the message is named?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag":  "User",
                        "note": null,
                        "next": "00.06"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.05.5"
                    }
                ]
            },
            "00.05.5":{
                "title": "Your call has ended and you have a few people you have to email.",
                "text": "Would you like to use autocorrection?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag":  "User",
                        "note": null,
                        "next": "00.05.6"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be awefu",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.06"
                    }
                ]
            },
            "00.05.6":{
                "title": null,
                "text": "Should autocorrection finish your words after two letters, based on your writing history?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag":  "User",
                        "note": null,
                        "next": "00.05.7"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be awefu",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.06"
                    }   
                ]
            },
            "00.05.7":{
                "title": null,
                "text": "Should autocorrection finish your sentences after two words, based on your writing history?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag":  "User",
                        "note": null,
                        "next": "00.06"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be awefu",
                        "tag":  "Operator",
                        "note": null,
                        "next": "00.06"
                    }   
                ]
            },
            "00.06":{
                "title": "You are going to travel for work.",
                "text": "As you walk to outside your house would you rather:",
                "action": null,
                "answers":[
                    {
                        "type": "option",
                        "text": "Automatically lock my door after 20 seconds when I'm outside",
                        "tag":  "Pro,User",
                        "note": null,
                        "next": "01.00.0"
                    },
                    {
                        "type": "option",
                        "text": "Lock the door by hand",
                        "tag":  "Con,Operator",
                        "note": null,
                        "next": "01.00.0"
                    }
                ]
            },
            "01.00.0":{
                "title": "About the traveling.",
                "text": "What would be your favorite way of traveling to your work be, regardless of distance, wheater and location?",
                "action": null,
                "answers":[
                    {
                        "type": "option",
                        "text": "Go by car",
                        "tag":  "Neutral",
                        "note": null,
                        "next": "01.01.0"
                    },
                    {
                        "type": "option",
                        "text": "Go by bicycle",
                        "tag":  "Operator",
                        "note": null,
                        "next": "01.02.0"
                    },
                    {
                        "type": "option",
                        "text": "Go by cab",
                        "tag":  "User",
                        "note": null,
                        "next": "01.03.0"
                    },
                    {
                        "type": "option",
                        "text": "Go by train",
                        "tag":  "User",
                        "note": null,
                        "next": "01.04.0"
                    },
                    {
                        "type": "option",
                        "text": "Go by bus",
                        "tag":  "User",
                        "note": null,
                        "next": "01.05.0"
                    },
                    {
                        "type": "option",
                        "text": "Go walking",
                        "tag":  "Operator",
                        "note": null,
                        "next": "01.06.0"
                    }
                ]
            },
            "01.01.0":{
                "title": "You go by car, so you hop in",
                "text": "Does your car have an automated or a manual clutch?",
                "action": null,
                "answers":[
                    {
                        "type": "option",
                        "text": "Automate",
                        "tag":  "User",
                        "note": null,
                        "next": "01.01.1"
                    },
                    {
                        "type": "option",
                        "text": "Manual",
                        "tag":  "Operator",
                        "note": null,
                        "next": "01.01.1"
                    }
                ]
            },
            "01.01.1":{
                "title": null,
                "text": "Would you like your car to have parking sensors?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro",
                        "note": null,
                        "next": "01.01.2"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.01.2":{
                "title": null,
                "text": "Does the car have a GPS-system?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro",
                        "note": null,
                        "next": "01.01.3"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.01.3":{
                "title": null,
                "text": "Do you take the first route suggestion the cars' GPS gives you?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "01.01.4"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "01.01.8"
                    }
                ]
            },
            "01.01.4":{
                "title": null,
                "text": "Would you let the car drive you automatically to your destination?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "01.01.5"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "01.01.7"
                    }
                ]
            },
            "01.01.5":{
                "title": null,
                "text": "Should your car be synchronised with your schedule, so that it will pick you up when you have an appointment?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "01.01.6"
                    }
                ]
            },
            "01.01.6":{
                "title": null,
                "text": "Should you be able to schedule your car manually?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.01.7":{
                "title": null,
                "text": "Would you then like to have your car semi-controlled, only steering?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "Pro",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.01.8":{
                "title": null,
                "text": "Should the car make a profile of your driving style and adjust routes upon your style of driving?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, safe and handy",
                        "tag":  "User",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No, expensive and obsolete",
                        "tag":  "Operator",
                        "note": null,
                        "next": "02.01"
                    }   
                ]
            },
            "01.02.0":{
                "title": "You hop on your bike, it turned out to be nice wheater too!",
                "text": "Does your bike have gears?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "user",
                        "note": null,
                        "next": "01.02.2"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Operator",
                        "note": null,
                        "next": "01.02.1"
                    }
                ]
            },
            "01.02.1":{
                "title": null,
                "text": "Is your bike completely fixed gear?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "01.08.2"
                    }
                ]
            },
            "01.02.2":{
                "title": null,
                "text": "Does your bike have a cyclometer?",
                "action": "(A cyclometer is a small device which you mount on your bike that shows your speed, climbing angle and the distance you have cycled.)",
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes, super handy",
                        "tag":  "Pro",
                        "note": null,
                        "next": "01.02.3"
                    },
                    {
                        "type": "no",
                        "text": "No, I use my iPhone which does more than a cyclometer",
                        "tag":  "Pro",
                        "note": null,
                        "next": "01.02.5"
                    },
                    {
                        "type": null,
                        "text": "No, thank you",
                        "tag":  "Con",
                        "note": null,
                        "next": "01.02.3"
                    }
                ]
            },
            "01.02.3":{
                "title": null,
                "text": "Would you like your bike to have an smartphone mounting system so that you can see and use your smartphone underway?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "Pro",
                        "note": null,
                        "next": "01.02.5"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Con",
                        "note": null,
                        "next": "01.02.4"
                    }
                ]
            },
            "01.02.4":{
                "title": null,
                "text": "Would you like your bike to have a GPS system attached to it?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "User",
                        "note": null,
                        "next": "01.02.5"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Operator",
                        "note": null,
                        "next": "01.02.6"
                    }
                ]
            },
            "01.02.5":{
                "title": null,
                "text": "Do you take the first route that is suggested by your GPS system?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "User",
                        "note": null,
                        "next": "01.02.6"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Operator",
                        "note": null,
                        "next": "01.02.6"
                    }
                ]
            },
            "01.02.6":{
                "title": null,
                "text": "Would you like your bike to be an electronic bike?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "User",
                        "note": null,
                        "next": "01.02.7"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.02.7":{
                "title": null,
                "text": "Would you like your bike to be an self-driving bike?",
                "action": null,
                "answers":[
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag":  "Pro, User",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag":  "Con, Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.03.0": {
                "title": "You are standing outside on your frontyard.",
                "text": "Would you like a regular cab or a self-driving cab?",
                "action": null,
                "answers": [
                    {
                        "type": "option",
                        "text": "Hop in regular cab",
                        "tag": "Con",
                        "note": null,
                        "next": "01.03.1"
                    },
                    {
                        "type": "option",
                        "text": "Hop in self-driving cab",
                        "tag": "Pro",
                        "note": null,
                        "next": "01.03.2"
                    }
                ]
            },
            "01.03.1": {
                "title": null,
                "text": "As a cab pulls over for you, you hop in and:",
                "action": null,
                "answers": [
                    {
                        "type": "option",
                        "text": "Talk to the cab driver about where you want to go.",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "option",
                        "text": "Share your destination with the cab's GPS via Bluetooth",
                        "tag": "User",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.03.2": {
                "title": null,
                "text": "As the self-driving cab was parked according to your schedule, you hop in and:",
                "action": null,
                "answers": [
                    {
                        "type": "option",
                        "text": "Type in my destination.",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "option",
                        "text": "Sit back as it already knows.",
                        "tag": "User",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.04.0": {
                "title": "You go by train, so you go to the station.",
                "text": "Would you like your ticket to have been instantly bought according to your schedule?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro, User",
                        "note": null,
                        "next": "01.04.1"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con, Operator",
                        "note": null,
                        "next": "01.04.2"
                    }
                ]
            },
            "01.04.1": {
                "title": "As you get at the station your train is delayed.",
                "text": "Should your work be automatically be notified?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "01.04.2"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "01.04.2"
                    }
                ]
            },
            "01.04.2": {
                "title": "The train has arrived on the platform.",
                "text": "Would you take the magnetic levitated or hispeed train?",
                "action": "This would mean that the train travels at hyperspeed (500 km/h). A hispeed train travels at a speed of 270 km/h.",
                "answers": [
                    {
                        "type": "option",
                        "text": "Magnetic levitated train",
                        "tag": "Pro",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "option",
                        "text": "Hispeed train",
                        "tag": "Con",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.05.0": {
                "title": "You go by bus.",
                "text": "Would you like your ticket to have been instantly bought according to your schedule?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro, User",
                        "note": null,
                        "next": "01.05.1"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con, Operator",
                        "note": null,
                        "next": "01.05.1"
                    }
                ]
            },
            "01.05.1": {
                "title": null,
                "text": "Would you rather go with a fixed-route bus, a static busstop, flexible-route bus and/or flexible busstop?",
                "action": "1) With flexible-route bus I mean a bus that responds to the check-ins from people that check-in with their smartphone.2) With flexible busstop I mean a busstop that is created as a hotspot, the middlepoint of several people checking-in with their smartphone.3) With fixed-route bus I mean a regular bus which drives a fixed route between points A and B.4) With static busstop I mean a regular busstop which has a fixed location along a road.",
                "answers": [
                    {
                        "type": "option",
                        "text": "Flexible-route bus and flexible busstop",
                        "tag": "Pro,Operator",
                        "note": null,
                        "next": "01.05.2"
                    },
                    {
                        "type": "option",
                        "text": "Fixed-route and flexible busstop",
                        "tag": "Pro,User",
                        "note": null,
                        "next": "01.05.2"
                    },
                    {
                        "type": "option",
                        "text": "Fixed-route and static busstop",
                        "tag": "Con,User",
                        "note": null,
                        "next": "01.05.2"
                    },
                    {
                        "type": "option",
                        "text": "Flexible-route and static busstop",
                        "tag": "Con,Operator",
                        "note": null,
                        "next": "01.05.2"
                    }
                ]
            },
            "01.05.2": {
                "title": "You take the [chosen bus] as you walk to the [chosen busstop].",
                "text": "Should the bus be a self-driving bus?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Pro",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.06.0": {
                "title": "You going to walk.",
                "text": "How would you like to navigate to your work?",
                "action": "The fresh air is blowing through your hair as you walk on the sidewalk. As it is your first time in this neighbourhood you don't know it very well.",
                "answers": [
                    {
                        "type": "option",
                        "text": "Use Google Maps",
                        "tag": "User",
                        "note": null,
                        "next": "01.06.1"
                    },
                    {
                        "type": "option",
                        "text": "Ask directions",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "option",
                        "text": "Find out myself",
                        "tag": "Operator",
                        "note": null,
                        "next": "01.06.3"
                    }
                ]
            },
            "01.06.1": {
                "title": "Using Google Maps.",
                "text": "Do you take the first route suggestion Google Maps gives you?",
                "action": "You take your smartphone and open Google Maps. You type in your destination and ask for the walking route starting at your location.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "01.06.2"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.06.2": {
                "title": null,
                "text": "Would you like Google Maps to suggest nice places to go to which are in the neighbourhood?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro, User",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con, Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "01.06.3": {
                "title": "You are walking by yourself and navigate by mere gut feeling.",
                "text": "Would you like to get notified about nice places to go to in this neighbourhood based on your profile?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro, User",
                        "note": null,
                        "next": "02.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con, Operator",
                        "note": null,
                        "next": "02.01"
                    }
                ]
            },
            "02.01": {
                "title": "You have arrived at work.",
                "text": "Would you like to take the elevator or the stairs?",
                "action": "You walk into the building. As you walk through the hallway you stand in front of the elevator and stairs that go up to your officespace at floor 6.",
                "answers": [
                    {
                        "type": "option",
                        "text": "Take elevator",
                        "tag": "User",
                        "note": null,
                        "next": "02.02"
                    },
                    {
                        "type": "option",
                        "text": "Take stairs",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.02"
                    }
                ]
            },
            "02.02": {
                "title": "You enter floor 6 and go to your [workspace].",
                "text": "Would you like to get a list of suggestions for the day ordered according to priority?",
                "action": "As you unpack your stuff you boot-up your computer.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "02.03"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "02.04"
                    }
                ]
            },
            "02.03": {
                "title": null,
                "text": "Would you like to get a notification on where you should start first?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "02.04"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "02.04"
                    }
                ]
            },
            "02.04": {
                "title": "Your computer booted up.",
                "text": "As always you receive really alot of emails over the night. What would you prefer to do?",
                "action": null,
                "answers": [
                    {
                        "type": "option",
                        "text": "Have all emails autoreplied",
                        "tag": "User,Pro",
                        "note": null,
                        "next": "02.05"
                    },
                    {
                        "type": "option",
                        "text": "Auto generate emails but let me push 'SEND'",
                        "tag": "Pro,Neutral",
                        "note": null,
                        "next": "02.05"
                    },
                    {
                        "type": "option",
                        "text": "Check emails myself but auto delete spam and commercials",
                        "tag": "Con,Neutral",
                        "note": null,
                        "next": "02.05"
                    },
                    {
                        "type": "option",
                        "text": "Check emails myself",
                        "tag": "Con,Operator",
                        "note": null,
                        "next": "02.05"
                    }
                ]
            },
            "02.05": {
                "title": null,
                "text": "Would you like to fill your agenda automatically according to emails and online activities?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "02.07"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.06"
                    }
                ]
            },
            "02.06": {
                "title": null,
                "text": "Should your agenda collect items based on email and online activities but you have to add them manually?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "02.07"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "02.07"
                    }
                ]
            },
            "02.07": {
                "title": null,
                "text": "Would you like your computer to keep track of the work you are doing?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "02.08"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "03.00"
                    }
                ]
            },
            "02.07": {
                "title": null,
                "text": "Would you like to use your work data for showing your input which could lead to financial bonusses?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "03.00"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "03.00"
                    }
                ]
            }  
        }
    },
    {
        "time": "12:00",
        "title": "afternoon time",
        "questions": {
            "03.00": {
                "title": "It is time for lunch!",
                "text": "How does your lunch look like?",
                "action": null,
                "answers": [
                    {
                        "type": "option",
                        "text": "Homemade",
                        "tag": "Con,Operator",
                        "note": null,
                        "next": "03.01"
                    },
                    {
                        "type": "option",
                        "text": "Buying it at a lunch cafe",
                        "tag": "Con,User",
                        "note": null,
                        "next": "03.03"
                    },
                    {
                        "type": "option",
                        "text": "Delivered by a service which checks my eating profile",
                        "tag": "Pro,User",
                        "note": null,
                        "next": "03.04"
                    },
                    {
                        "type": "option",
                        "text": "Ordered lunch via internet",
                        "tag": "Pro,Operator",
                        "note": null,
                        "next": "04.01"
                    }
                ]
            },
            "03.01": {
                "title": "Homemade huh!",
                "text": "Would you like to have your groceries delivered at home?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "note": null,
                        "next": "03.02"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "04.01"
                    }
                ]
            },
            "03.02": {
                "title": null,
                "text": "Should it be automatically ordered when an item which you very often buy is eaten?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user,Pro",
                        "note": null,
                        "next": "04.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator, Con",
                        "note": null,
                        "next": "04.01"
                    }
                ]
            },
            "03.03": {
                "title": "So you buy your lunch at a lunch cafe.",
                "text": "Would you like to order on forehand?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "03.04"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "04.01"
                    }
                ]
            },
            "03.04": {
                "title": "Your lunch gets delivered!",
                "text": "Should it also bring you in contact with people who have the same taste?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "04.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "04.01"
                    }
                ]
            },
            "04.01": {
                "title": "You just have had lunch. Are you still feeling OK?",
                "text": "Would you like to check your health condition?",
                "action": "You just had lunch and you did already quiet some work. But as the day has progressed it could be handy to check your health.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "04.02"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "05.01"
                    }
                ]
            },
            "04.02": {
                "title": null,
                "text": "Would you rather have an internal heart monitor with alot of capabilities or a wearable with less?",
                "action": null,
                "answers": [
                    {
                        "type": "option",
                        "text": "Heart monitor",
                        "tag": "Pro",
                        "note": null,
                        "next": "04.03"
                    },
                    {
                        "type": "option",
                        "text": "Wearable",
                        "tag": "Con",
                        "note": null,
                        "next": "04.03"
                    }
                ]
            },
            "04.03": {
                "title": null,
                "text": "Would like to everyday keep track of your health?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, then I can see the history and curvature of my health",
                        "tag": "User",
                        "note": null,
                        "next": "04.04"
                    },
                    {
                        "type": "no",
                        "text": "No, I only want to see at the moment if everything is fine",
                        "tag": "Operator",
                        "note": null,
                        "next": "05.01"
                    }
                ]
            },
            "04.04": {
                "title": null,
                "text": "Should it send a text message to you phone, when it detects even the smallest arrhythmias?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "04.05"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "04.07"
                    }
                ]
            },
            "04.05": {
                "title": null,
                "text": "Would you like your doctor to have all the information of what is happening in your body?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "04.06"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "04.08"
                    }
                ]
            },
            "04.06": {
                "title": null,
                "text": "Do you want an ambulance immediately coming for you when your monitor detects a serieus issue?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "04.08"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "04.08"
                    }
                ]
            },
            "04.07": {
                "title": null,
                "text": "Should it send a text message to your phone with big arrhythmias?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "User",
                        "note": null,
                        "next": "04.06"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Operator",
                        "note": null,
                        "next": "05.01"
                    }
                ]
            },
            "04.08": {
                "title": null,
                "text": "Should people, like loved ones, be able to access your medical information?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "note": null,
                        "next": "05.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "note": null,
                        "next": "05.01"
                    }
                ]
            },
            "05.01": {
                "title": "You get back to work as lunch time is over.",
                "text": "Would you like to use autocorrection?",
                "action": "You are back at working again. A few hours pass as when suddenly you feel your phone vibrating. It is a friend of yours who has sended you a message. It is actually quiet nice to take a moment off and you start your reply.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "05.02"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "06.00"
                    }
                ]
            },
            "05.02": {
                "title": null,
                "text": "Should autocorrection finish your words after two letters, based on your writing history?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "05.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "05.04"
                    }
                ]
            },
            "05.03": {
                "title": null,
                "text": "Should autocorrection finish your sentences after two words, based on your writing history?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "05.05"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "05.06"
                    }
                ]
            },
            "05.04": {
                "title": null,
                "text": "Should autocorrection suggest words as you are typing two letters?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "05.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "06.00"
                    }
                ]
            },
            "05.05": {
                "title": null,
                "text": "You could consider using smart auto-reply, which analyses your writing style with relations?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, I would prefer using auto-reply",
                        "tag": "Pro",
                        "note": null,
                        "next": "06.00"
                    },
                    {
                        "type": "no",
                        "text": "No, I would not prefer using auto-reply",
                        "tag": "Con",
                        "note": null,
                        "next": "06.00"
                    }
                ]
            },
            "05.06": {
                "title": null,
                "text": "Should autocorrection suggest sentences as you are typing two words?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "06.00"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "06.00"
                    }
                ]
            },
            "06.00": {
                "title": "You are done with your working day. And now back to school! As you are done for the day your little niece has to be picked up at her primary school.",
                "text": "Do you think kids at primary school should have smartphones?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "06.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "06.02"
                    }
                ]
            },
            "06.01": {
                "title": "Keeping track.",
                "text": "Do you want to send her your location as your travel?",
                "action": "Then see can keep track of you.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "06.02"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "06.02"
                    }
                ]
            },
            "06.02": {
                "title": "Back to school!",
                "text": "Do you think non-linear/self learning is good for children?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "06.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "07.01"
                    }
                ]
            },
            "06.03": {
                "title": "Back to school!",
                "text": "Should kids have a program that tracks their progress, learns them when they want to learn and the subject they want to learn?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that great.",
                        "tag": "Pro",
                        "note": null,
                        "next": "06.04"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "07.01"
                    }
                ]
            },
            "06.04": {
                "title": null,
                "text": "Should children have a robot for protection and useful other things?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "06.05"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "07.01"
                    }
                ]
            },
            "06.05": {
                "title": null,
                "text": "Would you then let her go home together with her robot buddy?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would save me time",
                        "tag": "user",
                        "note": null,
                        "next": "07.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be dangerous",
                        "tag": "operator",
                        "note": null,
                        "next": "07.01"
                    }
                ]
            },
            "07.01": {
                "title": "Lets go home!",
                "text": "Should the door recognize you and open automatically?",
                "action": "You travel back home. You walk in your frontyard and walk to the frontdoor.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "note": null,
                        "next": "07.02"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "note": null,
                        "next": "08.01"
                    }
                ]
            },
            "07.02": {
                "title": null,
                "text": "Would you let your door open automatically when it recognizes, to it familiar or known, other people?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user,Pro",
                        "note": null,
                        "next": "07.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator,Con",
                        "note": null,
                        "next": "08.01"
                    }
                ]
            },
            "07.03": {
                "title": null,
                "text": "Would you let your door judge if a person should be let in your house, even when your not home?",
                "action": "e.g. for a plumber or painter.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "08.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "08.01"
                    }
                ]
            },
            "08.01": {
                "title": "Your are in your house.",
                "text": "Would you like your Roomba Vacuum Cleaner to have cleaned the house?",
                "action": "As the door opens, you walk into your house.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "08.02"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "09.01"
                    }
                ]
            },
            "08.02": {
                "title": null,
                "text": "Would you let a cleaning bot clean your whole house?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "08.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "09.01"
                    }
                ]
            },
            "08.03": {
                "title": null,
                "text": "Would you let a cleaning bot decide what to put in the trashbin and what not?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "08.04"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "09.01"
                    }
                ]
            },
            "08.04": {
                "title": null,
                "text": "Would you let a bot to help you raise your dog?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "08.05"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "09.01"
                    }
                ]
            },
            "08.05": {
                "title": null,
                "text": "Would you let a bot to help you raise your children?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "08.06"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "09.01"
                    }
                ]
            },
            "08.06": {
                "title": null,
                "text": "Would you let a bot raise your children?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "09.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "09.01"
                    }
                ]
            }
        }
    },
    {
        "time": "18:00",
        "title": "Evening time",
        "questions": {
            "09.01": {
                "title": "Dinner time!",
                "text": "Would you let a digital chef cook your meals?",
                "action": "You came back from work and worked hard today. You sure are hungry!",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "09.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "09.02"
                    }
                ]
            },
            "09.02": {
                "title": null,
                "action": null,
                "text": "Would you let a digital chef first learn from you to eventually cook for you?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "09.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "10.01"
                    }
                ]
            },
            "09.03": {
                "title": null,
                "action": null,
                "text": "Would you let your digital chef buy groceries by itself?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "09.04"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "10.01"
                    }
                ]
            },
            "09.04": {
                "title": null,
                "action": null,
                "text": "Would you let your digital chef decide what you will have for dinner, with exceptions of dishes you dislike?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "10.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "10.01"
                    }
                ]
            },
            "10.01": {
                "title": "You are going to check your Facebook wall.",
                "action": "You just ate dinner and have some nice spare time. You log in to facebook and check your wall.",
                "text": "Should it show you all the posts according to time or the posts according to relevance of your profile and friendship relations?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Show according to time",
                        "tag": "con",
                        "next": "10.02"
                    },
                    {
                        "type": "option",
                        "text": "Show according to relevance",
                        "tag": "pro",
                        "next": "10.02"
                    }
                ]
            },
            "10.02": {
                "title": null,
                "action": null,
                "text": "Would you like Facebook to suggest parties and events based on your profile?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "10.03"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "10.04"
                    }
                ]
            },
            "10.03": {
                "title": null,
                "action": null,
                "text": "Would you like Facebook to plan your parties and events, based on your profile, friends who go and agenda?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "10.03.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "10.04"
                    }
                ]
            },
            "10.03.01": {
                "title": null,
                "action": null,
                "text": "Would you like Facebook to suggest people you should know or like according to your profile?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "10.03.02"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "10.04"
                    }
                ]
            },
            "10.03.02": {
                "title": null,
                "action": null,
                "text": "Would you like Facebook to auto friend people that you really should like according to your profile?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "10.04"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "10.04"
                    }
                ]
            },
            "10.04": {
                "title": null,
                "action": null,
                "text": "Would you like Facebook to keep track of you activities and post automated updates of your day?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "11.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "11.01"
                    }
                ]
            },
            "11.01": {
                "title": "You are going to visit your grandmother.",
                "action": "Your grandmother has just moved to a new apartment. She now lives alone and at age. You go to her place for a nice cup of tea and some chitchat. As your grandmother now lives alone and is less mobile, she definitely needs some help around the house. ",
                "text": "What would you suggest to arrange in order to help her?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Caregiver",
                        "tag": "neutral",
                        "next": "11.02"
                    },
                    {
                        "type": "option",
                        "text": "Nursing home",
                        "tag": "neutral",
                        "next": "12.01"
                    },
                    {
                        "type": "option",
                        "text": "Family caregiver",
                        "tag": "con",
                        "next": "11.04"
                    },
                    {
                        "type": "option",
                        "text": "Domestic Robot",
                        "tag": "pro",
                        "next": "11.05"
                    }
                ]
            },
            "11.02": {
                "title": "You arrange a caregiver  for your grandmother that will visit and do house chores and cooking for her.",
                "action": "Unfortunatey the caregiver only stays for a few hours. This leaves your mother the biggest part of the day unattended.",
                "text": "Do you want to install some kind of alarm system?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Yes, an alarm system which monitors with cameras",
                        "tag": "pro",
                        "next": "11.02.01"
                    },
                    {
                        "type": "option",
                        "text": "Yes, motion senors that detect if something is wrong",
                        "tag": "pro",
                        "next": "11.02.01"
                    },
                    {
                        "type": "option",
                        "text": "Yes, a wearable health monitor",
                        "tag": "pro",
                        "next": "11.02.01"
                    },
                    {
                        "type": "option",
                        "text": "Yes, all of the above",
                        "tag": "pro",
                        "next": "11.02.01"
                    },
                    {
                        "type": "option",
                        "text": "No",
                        "tag": "con",
                        "next": "11.03"
                    }
                ]
            },
            "11.02.01": {
                "title": null,
                "action": null,
                "text": "Should it notify you and other relatives immediatly when it detects something odd?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "11.02.02"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "11.03"
                    }
                ]
            },
            "11.02.02": {
                "title": null,
                "action": null,
                "text": "Should it track your grandmothers face in order to perceive if she is in a good condition?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "11.02.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "11.03"
                    }
                ]
            },
            "11.02.03": {
                "title": null,
                "action": null,
                "text": "Should it keep you updated on her condition and mood?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "11.02.04"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "11.03"
                    }
                ]
            },
            "11.02.04": {
                "title": null,
                "action": null,
                "text": "Should it then give you advice on what to do in case of an emergency?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "11.02.05"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "11.03"
                    }
                ]
            },
            "11.02.05": {
                "title": null,
                "action": null,
                "text": "Would you like to automatically schedule your visists when she needs it the most according to the system?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "11.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "11.03"
                    }
                ]
            },
            "11.03": {
                "title": "As the caregiver is very effective...",
                "action": "The caregiver is a really nice service which makes your grandmother's live a lot easier to live and to keep her at her own apartment. Still your grandmother is really lonely. Shes doesn't know a lot of the people in the neighbourhood and she isn't very mobile too.",
                "text": "What would you prefer for your grandmothers social companionship on day-to-day basis?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Domestic robot",
                        "tag": "user",
                        "next": "11.05"
                    },
                    {
                        "type": "option",
                        "text": "Make family schedule to visit grandmother",
                        "tag": "neutral",
                        "next": "12.01"
                    }
                ]
            },
            "11.04": {
                "title": "Family caregiver...",
                "action": "You arrange a schedule for a few family caregivers.",
                "text": "Would you like to automatically generate the schedule based on everyones schedule?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "11.04.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "11.05"
                    }
                ]
            },
            "11.04.01": {
                "title": "The schedule is made and the few of you are responsible for your grandmother now.",
                "action": "Unfortunatey you all can only stay for a few hours per day. This leaves your mother the biggest part of the day unattended.",
                "text": "Do you want to install somekind of alarm system?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Yes, an alarm system which monitors with cameras",
                        "tag": "pro",
                        "next": "11.05"
                    },
                    {
                        "type": "option",
                        "text": "Yes, motion senors that detect if something is wrong",
                        "tag": "pro",
                        "next": "11.05"
                    },
                    {
                        "type": "option",
                        "text": "Yes, a wearable health monitor",
                        "tag": "pro",
                        "next": "11.05"
                    },
                    {
                        "type": "option",
                        "text": "Yes, all of the above",
                        "tag": "pro",
                        "next": "11.05"
                    },
                    {
                        "type": "option",
                        "text": "No",
                        "tag": "con",
                        "next": "11.05"
                    }
                ]
            },
            "11.05": {
                "title": "You arrange a domestic robot.",
                "action": "Domestic robots come in many sizes and can have many functions to do many services.",
                "text": "What should the domestic robot be able to offer your grandmother?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Only helping with house chores",
                        "tag": "pro",
                        "next": "11.05.01"
                    },
                    {
                        "type": "option",
                        "text": "Doing house chores and built-in alarm system",
                        "tag": "pro",
                        "next": "11.05.02"
                    },
                    {
                        "type": "option",
                        "text": "Doing house chores, Alarm system and Providing social company",
                        "tag": "pro",
                        "next": "11.05.04"
                    }
                ]
            },
            "11.05.01": {
                "title": "Only house chores.",
                "action": "You grandmothers domestic robot does it work perfectly. Unfortunately, being only a work-helper, it doesn't provide safety. It leaves your grandmother the biggest part of the day unattended.",
                "text": "Do you want to install some kind of alarm system?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Yes, an alarm system which monitors with cameras",
                        "tag": "pro",
                        "next": "11.05.02"
                    },
                    {
                        "type": "option",
                        "text": "Yes, motion senors that detect if something is wrong",
                        "tag": "pro",
                        "next": "11.05.02"
                    },
                    {
                        "type": "option",
                        "text": "Yes, a wearable health monitor",
                        "tag": "pro",
                        "next": "11.05.02"
                    },
                    {
                        "type": "option",
                        "text": "Yes, all of the above",
                        "tag": "pro",
                        "next": "11.05.02"
                    },
                    {
                        "type": "option",
                        "text": "No",
                        "tag": "con",
                        "next": "11.06"
                    }
                ]
            },
            "11.05.02": {
                "title": "House chores and built-in alarm system...",
                "action": "The robot is a really nice help and secures your grandmothers safety. It makes your grandmother's live a lot easier to live and to keep her at her own apartment. Still your grandmother is really lonely. Shes doesn't know a lot of the people in the neighbourhood and she isn't very mobile too.",
                "text": "What would you prefer for your grandmothers social companionship on day-to-day basis?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Another robot",
                        "tag": "user",
                        "next": "12.01"
                    },
                    {
                        "type": "option",
                        "text": "Make family schedule to visit grandmother",
                        "tag": "operator",
                        "next": "11.05.03"
                    }
                ]
            },
            "11.05.03": {
                "title": "Family schedule...",
                "action": "You arrange a schedule for a few family caregivers.",
                "text": "Would you like to automatically generate the schedule based on everyones schedule?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "11.05.04"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "12.01"
                    }
                ]
            },
            "11.05.04": {
                "title": "House chores, alarm system and providing social company...",
                "action": "The robot is a really nice help and secures your grandmothers safety. It makes your grandmother's live a lot easier to live and to keep her at her own apartment. It keeps your grandmother company. She can have a nice chat with the robot and she can as much as the internet has answers for. But of course relatives are still the most important to her. As you are very busy with work as the rest of your family you need to find a solution when to see her.",
                "text": "Would you like to automatically schedule your visists when she needs it the most according to the system?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "user",
                        "next": "12.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "operator",
                        "next": "12.01"
                    }
                ]
            },
            "12.01": {
                "title": "Back at home...",
                "action": "You are back home again and it is still early. You have no plans for tonight.",
                "text": "What would you like to do tonight, regardless of what your schedule is for tomorrow?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Party",
                        "tag": null,
                        "next": "12.02"
                    },
                    {
                        "type": "option",
                        "text": "Get together with friends",
                        "tag": null,
                        "next": "12.03"
                    },
                    {
                        "type": "option",
                        "text": "Play a game",
                        "tag": null,
                        "next": "12.04"
                    },
                    {
                        "type": "option",
                        "text": "Watch television",
                        "tag": null,
                        "next": "12.05"
                    },
                    {
                        "type": "option",
                        "text": "Go on tinder",
                        "tag": null,
                        "next": "12.06"
                    }
                ]
            },
            "12.02": {
                "title": "Party...",
                "action": null,
                "text": "Would you like to have your clothes be automatically picked?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.02.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "13.01"
                    }
                ]
            },
            "12.02.01": {
                "title": null,
                "action": null,
                "text": "Would you like to have a digital program to give feedback on your dress style?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.02.02"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "12.02.03"
                    }
                ]
            },
            "12.02.02": {
                "title": null,
                "action": null,
                "text": "Would you like to practice dancing with a virtual computer?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.02.03"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "12.02.03"
                    }
                ]
            },
            "12.02.03": {
                "title": null,
                "action": null,
                "text": "Would you like to attend a party selected by your profile?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.02.04"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "12.02.04"
                    }
                ]
            },
            "12.02.04": {
                "title": null,
                "action": null,
                "text": "What kind of music do you like?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Electronic",
                        "tag": "Pro",
                        "next": "12.02.05"
                    },
                    {
                        "type": "option",
                        "text": "Popular",
                        "tag": "Neutral",
                        "next": "12.02.05"
                    },
                    {
                        "type": "option",
                        "text": "Classical",
                        "tag": "Con",
                        "next": "13.01"
                    }
                ]
            },
            "12.02.05": {
                "title": null,
                "action": null,
                "text": "Would you like it if the music was completely made by and with computers to make completely new music?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "Pro",
                        "next": "13.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "Con",
                        "next": "13.01"
                    }
                ]
            },
            "12.03": {
                "title": "Friends...",
                "action": null,
                "text": "Would you like to have your friends over at your place or in a digital environment?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Your place",
                        "tag": "con",
                        "next": "13.01"
                    },
                    {
                        "type": "option",
                        "text": "Digital environment",
                        "tag": "pro",
                        "next": "13.01"
                    }
                ]
            },
            "12.04": {
                "title": "Game...",
                "action": null,
                "text": "What type of game would you like to play?",
                "answers": [
                    {
                        "type": "option",
                        "text": "Digital, multiplayer",
                        "tag": "pro",
                        "next": "13.01"
                    },
                    {
                        "type": "option",
                        "text": "Digital, singleplayer",
                        "tag": "pro",
                        "next": "13.01"
                    },
                    {
                        "type": "option",
                        "text": "Analogue, multiplayer",
                        "tag": "con",
                        "next": "13.01"
                    },
                    {
                        "type": "option",
                        "text": "Analogue, singleplayer",
                        "tag": "con",
                        "next": "13.01"
                    }
                ]
            },
            "12.05": {
                "title": "Television...",
                "action": null,
                "text": "Would you like to have a customized TV schedule?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "pro",
                        "next": "13.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "con",
                        "next": "13.01"
                    }
                ]
            },
            "12.06": {
                "title": "Tinder...",
                "action": null,
                "text": "Should it pick, match and set date automatically, based on your profile and agenda?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "pro",
                        "next": "12.06"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "con",
                        "next": "13.01"
                    }
                ]
            },
            "12.06.01": {
                "title": "Tinder...",
                "action": null,
                "text": "Should it pick, match and set date automatically, based on your profile and agenda?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.06.02"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "12.06.03"
                    }
                ]
            },
            "12.06.02": {
                "title": null,
                "action": null,
                "text": "Would you like to have your clothes be automatically picked for your date?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.06.03"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "13.01"
                    }
                ]
            },
            "12.06.03": {
                "title": null,
                "action": null,
                "text": "Would you like to have a digital program to give feedback on your dress style?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.06.04"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "13.01"
                    }
                ]
            },
            "12.06.04": {
                "title": null,
                "action": null,
                "text": "Would you like to practice social skills, like talking, jokes, lines and confidence?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "12.06.05"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "13.01"
                    }
                ]
            },
            "12.06.05": {
                "title": null,
                "action": null,
                "text": "Would you like to search online the girl you're dating and get all her info?",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes",
                        "tag": "user",
                        "next": "13.01"
                    },
                    {
                        "type": "no",
                        "text": "No",
                        "tag": "operator",
                        "next": "13.01"
                    }
                ]
            }
        }
    },
    {
        "time": "00:00",
        "title": "night time",
        "questions": {
            "13.01": {
                "title": "Sleeping time!",
                "text": "Would you like to get something done while your sleeping?",
                "action": "You are ready for bed, it was an awesome day wasn't it?!",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "13.02"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "14.01"
                    }
                ]
            },
            "13.02": {
                "title": null,
                "text": "Would you like to learn while sleeping?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "User",
                        "note": null,
                        "next": "13.03"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Operator",
                        "note": null,
                        "next": "14.01"
                    }
                ]
            },
            "13.03": {
                "title": null,
                "text": "Would you like to reschedule your agenda according to the amount of sleep you need?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "13.04"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "14.01"
                    }
                ]
            },
            "13.04": {
                "title": null,
                "text": "Would you like to be connected with all the users who are on the same platform, making use of their knowledge?",
                "action": "As you start the sequence to learn something while sleeping your agenda gets rescheduled as its already 00:30 and you need at least 8 hours of sleep. You can learn by to hooking up to an online education platform.",
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "13.05"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "14.01"
                    }
                ]
            },
            "13.05": {
                "title": null,
                "text": "Would you like to be always internally connected with all the users who are on the same platform?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "13.06"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "14.01"
                    }
                ]
            },
            "13.06": {
                "title": null,
                "text": "Would you like to be always internally connected with all the people?",
                "action": null,
                "answers": [
                    {
                        "type": "yes",
                        "text": "Yes, that would be helpful",
                        "tag": "Pro",
                        "note": null,
                        "next": "14.01"
                    },
                    {
                        "type": "no",
                        "text": "No, that would be aweful",
                        "tag": "Con",
                        "note": null,
                        "next": "14.01"
                    }
                ]
            }
        }
    },
    {
        "time": "--:--",
        "title": "no time",
        "questions": {
            "14.01": {
                "title": "Succesion!",
                "text": "You just finished this questionnaire. I hope you found it enjoyable and have also found your future self. As for now our paths will split and go different ways. Of course you can always return to this place whenever you want but I will not garantee that I will be the same or that it will still be me who is here to talk to you and to ask questions to you......oh! Before I forget and you return to your home I would like to give you this artifact. As this is you in the future. If you didn't change your ideas and their values already. It shows the landscape that you provide for the future to build on. The future belongs to you and you can shape it. Not them or they but you. It has always started with you.",
                "action": "Goodbye my friend, it was pleasant to meet you.",
                "answers": [
                    {
                        "type": "option",
                        "text": "Goodbye",
                        "tag": null,
                        "note": null,
                        "next": null
                    }
                ]
            }
        }
    }
]