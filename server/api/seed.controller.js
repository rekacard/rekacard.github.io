// Defines endpoint handler exposed to client side for retrieving department information from database
var createNewAllTables = function (db) {
    return function (req, res) {

        createNewOrganisation(db);
        setTimeout(function () { //your express code here
            createNewRole(db);
            setTimeout(function () { //your express code here
                createNewUser(db);
                setTimeout(function () { //your express code here
                    createNewBadges(db);
                    setTimeout(function () { //your express code here
                        createNewUser_Badges(db);
                        setTimeout(function () { //your express code here
                            createNewAlerts(db);
                            setTimeout(function () { //your express code here
                                createNewEvent(db);
                                setTimeout(function () { //your express code here
                                    createNewEvent_User(db);
                                    setTimeout(function () { //your express code here
                                        createNewUser_Alerts(db);
                                        // setTimeout(function() { //your express code here
                                            // console.log("Callback function");
                                        // }, timeout_millisecond);
                                    }, 2000);
                                }, 2000); 
                            }, 500);
                        }, 500);
                    }, 500);
                }, 2000);
            }, 500);
        }, 500);
    };
};

var createNewRole = function (db) {
    //   return function(req, res) {
    db.Role
        .create({
            // role_id: 1,
            desc: "director",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Role
        .create({
            // role_id: 2,
            desc: "Event Organizer",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Role
        .create({
            // role_id: 3,
            desc: "Task Lead",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Role
        .create({
            // role_id: 4,
            desc: "Member",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })
    //   };
};


var createNewUser = function (db) {
    //   return function(req, res) {
    db.User
        .create({
            role_id: 1,
            nric: "S4535258D",
            salutation: "Mr",
            name_first: "John",
            name_last: "Kwan",
            gender: 'M',
            dob: '1945-03-09 00:00:00',
            tel_mobile: 81247586,
        })
        .then(function (user) {
            console.log(user);
            db.Email
                .create({
                    email_id: "john@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User
        .create({
            role_id: 2,
            nric: "S2329421A",
            salutation: "Ms",
            name_first: "Jenny",
            name_last: "Liu",
            gender: 'F',
            dob: '1925-05-19 00:00:00',
            tel_mobile: 86585424,
        })
        .then(function (user) {
            //  console.log(user);
            console.log(user.dataValues.user_id);
            db.Email
                .create({
                    email_id: "jenny@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })

        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User
        .create({
            role_id: 3,
            nric: "S9893439F",
            salutation: "Mr",
            name_first: "Kenneth",
            name_last: "Pang",
            gender: 'M',
            dob: '1998-02-03 00:00:00',
            tel_mobile: 87584632,
        })
        .then(function (user) {
            console.log(user);
            console.log(user.dataValues.user_id);
            db.Email
                .create({
                    email_id: "ken@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User
        .create({
            role_id: 1,
            nric: "S1234567A",
            salutation: "Ms",
            name_first: "Lynn",
            name_last: "Wong",
            gender: 'F',
            dob: '1988-11-10 00:00:00',
            tel_mobile: 91234567,
        })
        .then(function (user) {
            console.log(user);
            db.Email
                .create({
                    email_id: "lynn@email.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "123",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        });
        
    db.User
        .create({
            role_id: 4,
            nric: "S7423297G",
            salutation: "Dr",
            name_first: "Winnie",
            name_last: "Liang",
            gender: 'F',
            dob: '1974-11-12 00:00:00',
            tel_mobile: 85146325,
        })
        .then(function (user) {
            console.log(user);
            db.Email
                .create({
                    email_id: "winnie@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        });

    db.User
        .create({
            role_id: 4,
            nric: "S8782191H",
            salutation: "Ms",
            name_first: "Alice",
            name_last: "Tan",
            gender: 'F',
            dob: '1987-09-19 00:00:00',
            tel_mobile: 89995423,
        })
        .then(function (user) {
            console.log(user);
            db.Email
                .create({
                    email_id: "alice@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        });

    db.User
        .create({
            role_id: 4,
            nric: "S3243342E",
            salutation: "Mr",
            name_first: "Terry",
            name_last: "Foo",
            gender: 'M',
            dob: '1940-07-14 00:00:00',
            tel_mobile: 83205976,
        })
        .then(function (user) {
            console.log(user);
            db.Email
                .create({
                    email_id: "terry@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        });

    db.User
        .create({
            role_id: 4,
            nric: "S6762314D",
            salutation: "Ms",
            name_first: "Felicia",
            name_last: "Tang",
            gender: 'F',
            dob: '1967-01-026 00:00:00',
            tel_mobile: 81624587,
        })
        .then(function (user) {
            console.log(user);
            db.Email
                .create({
                    email_id: "felicia@ken.com",
                    user_id: parseInt(user.dataValues.user_id),
                    password: "abc",
                })
                .then(function (user) {
                    console.log(user);
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        });


    //   };
};

var createNewEvent = function (db) {
    //   return function(req, res) {
    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "U Heart: Tales From The Heart (Organising Committee Recruitment)",
            detail_desc: "Calling out for volunteers to join us in the core team to plan for Young NTUC U Heart 2017 – Finale!",
            start_date: "2017-12-12 00:00:00",
            end_date: "2017-12-12 00:00:00",
            start_time: "11:00:00",
            end_time: "15:00:00",
            total_hour: 4,
            venue: "Our Tampines Hub",
            category: "General",
            img_filename: "UHeart01.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "U Heart: Project Refresh @ Kaki Bukit",
            detail_desc: "Young NTUC Project Refresh aims to improve the living environment of elderlies staying in 1-room rental unit through a series of refurbishment works including painting, cleaning, bed bug fumigation...",
            start_date: "2017-12-30 00:00:00",
            end_date: "2017-12-30 00:00:00",
            start_time: "10:00:00",
            end_time: "17:00:00",
            total_hour: 7,
            venue: "Kaki Bukit Area",
            category: "General",
            img_filename: "UHeart02.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "U Heart: Masak- Masak",
            detail_desc: "Team Young NTUC Think Tank, Singapore Kindness Movement and People’s Association jointly organise U Heart: Masak-Masak to reach out to single parents and youths-at-risk, providing them an opportuni...",
            start_date: "2017-12-01 00:00:00",
            end_date: "2017-12-01 00:00:00",
            start_time: "10:30:00",
            end_time: "17:30:00",
            total_hour: 7,
            venue: "106 Joo Chiat Place, Singapore 427833",
            category: "General",
            img_filename: "UHeart03.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "Young NTUC U Heart 2017",
            detail_desc: "Young NTUC U Heart 2017, in collaboration with NTUC Income aims to leave a deeper, lasting impact on the lives of diverse group of beneficiaries through a series of youth self-initiated do-good pro...",
            start_date: "2017-12-03 00:00:00",
            end_date: "2017-12-03 00:00:00",
            start_time: "08:00:00",
            end_time: "23:00:00",
            total_hour: 15,
            venue: "Island-wide",
            category: "General",
            img_filename: "UHeart04.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "U Heart: Let's Celebrate!",
            detail_desc: "Leading up to SG52, we have planned a series of activities to get the young and old into the mood for our Nation’s birthday! From reminiscing the past with photo stories to our very own “Don’t Forg...",
            start_date: "2017-12-15 00:00:00",
            end_date: "2017-12-15 00:00:00",
            start_time: "09:00:00",
            end_time: "13:00:00",
            total_hour: 4,
            venue: "SilverACE@Redhill, 71 Redhill Rd, Singapore 150071",
            category: "General",
            img_filename: "UHeart05.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "Resilience - Sometimes You Win, Sometimes You Learn",
            detail_desc: "We will not be defeated by bad experiences. It is what we learn from these events that determine our ability to handle challenges and grow from them. This workshop sheds light on a path to a more fulfilling life by examining how loss can bring about abundance.",
            start_date: "2017-12-18 00:00:00",
            end_date: "2017-12-18 00:00:00",
            start_time: "19:00:00",
            end_time: "22:00:00",
            total_hour: 3,
            venue: "NTUC Centre, Level 8, Room 801",
            category: "General",
            img_filename: "UHeart06.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "Career Discovery & Mentorship Programme - Mentorship",
            detail_desc: "For youths aspiring to get ahead in your career, join us in this programme to gain better clarity of your career direction and get access to career mentors!",
            start_date: "2017-12-04 00:00:00",
            end_date: "2017-12-04 00:00:00",
            start_time: "18:30:00",
            end_time: "21:30:00",
            total_hour: 3,
            venue: "NTUC Centre, One Marina Boulevard",
            category: "General",
            img_filename: "UHeart07.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "SafeYouth@Work Congress",
            detail_desc: "The SafeYouth@Work Congress aims to build a global network of young champions for safety and health at work. Join us today and play an important role as change agent and enabler of sustainable deve...",
            start_date: "2017-12-02 00:00:00",
            end_date: "2017-12-02 00:00:00",
            start_time: "09:00:00",
            end_time: "18:00:00",
            total_hour: 9,
            venue: "Sands Expo and Convention Centre",
            category: "General",
            img_filename: "UHeart08.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 1,
            brief_desc: "Making a Career out of Doing Good",
            detail_desc: "Embark on a Learning Journey to Boys' Town and be introduced to the field of youth work that helps teens overcome challenges. Find out more about social service & youth work from esteemed speakers",
            start_date: "2017-12-06 00:00:00",
            end_date: "2017-12-06 00:00:00",
            start_time: "18:00:00",
            end_time: "21:30:00",
            total_hour: 3.5,
            venue: "Boys' Town, 624 Upper Bukit Timah Road, Singapore 678212",
            category: "General",
            img_filename: "UHeart09.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 2,
            brief_desc: "Snapshot of Singaporean youth",
            detail_desc: "Young Singaporeans are navigating their transition to adulthood in one of the most globalised countries in the world. They are more open and accepting of diversity, and believe they have a stake in the future of our nation",
            start_date: "2017-06-01 00:00:00",
            end_date: "2017-07-31 00:00:00",
            start_time: "00:00:00",
            end_time: "23:59:00",
            total_hour: 0.5,
            venue: "Online",
            category: "General",
            img_filename: "NYC01.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Events
        .create({
            organisation_id: 2,
            brief_desc: "Outward Bound Singapore",
            detail_desc: "A new Outward Bound Singapore (OBS) campus give more Singapore youths opportunities to strengthen their confidence and tenacity through outdoor adventure education",
            start_date: "2017-06-06 00:00:00",
            end_date: "2017-06-09 00:00:00",
            start_time: "08:00:00",
            end_time: "15:30:00",
            total_hour: 36,
            venue: "Coney Island",
            category: "General",
            img_filename: "NYC02.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })   

    db.Events
        .create({
            organisation_id: 2,
            brief_desc: "Stay-at-Home Elderly Home Visitation",
            detail_desc: "More Singaporeans who are single, widowed or divorced are living alone. With more solo dwellers, a group to look out for and support are the frail elderly who may be lonely or depressed, or may need help with daily activities.",
            start_date: "2017-06-15 00:00:00",
            end_date: "2017-06-15 00:00:00",
            start_time: "10:00:00",
            end_time: "17:30:00",
            total_hour: 7,
            venue: "Clementi Housing Estate",
            category: "General",
            img_filename: "NYC03.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })   

    db.Events
        .create({
            organisation_id: 2,
            brief_desc: "SHINE Festival 2017",
            detail_desc: "Singaporean youths are using their talents as a force for good in this Youth Month of July, debunking myths that they are apathetic and lack idealism.",
            start_date: "2017-07-30 00:00:00",
            end_date: "2017-07-30 00:00:00",
            start_time: "18:00:00",
            end_time: "22:00:00",
            total_hour: 4,
            venue: "Between *SCAPE and Ion Orchard",
            category: "General",
            img_filename: "NYC04.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })   
    // };
};

var createNewEvent_User = function (db) {
    //   return function(req, res) {
    console.log("createNewEvent_User");
    db.Event_User
        .create({
            event_id: 1,
            user_id: 4,
            role_id: 4,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 2,
            user_id: 4,
            role_id: 3,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 3,
            user_id: 4,
            role_id: 2,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 4,
            user_id: 4,
            role_id: 4,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 10,
            user_id: 4,
            role_id: 1,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 11,
            user_id: 4,
            role_id: 2,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 12,
            user_id: 4,
            role_id: 3,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Event_User
        .create({
            event_id: 13,
            user_id: 4,
            role_id: 4,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    // };
};

var createNewOrganisation = function (db) {
    //   return function(req, res) {
    db.Organisation
        .create({
            name: "NTUC",
            description: "NTUC Youth",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Organisation
        .create({
            name: "NYC",
            description: "National Youth Council",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })
    // };
};

var createNewUser_Badges = function (db) {
    //   return function(req, res) {
    var date = new Date;
    var dateNow = date.getUTCFullYear() +
        '-' + String(parseInt(date.getUTCMonth()) + 1)  +
        '-' + date.getUTCDate() +
        " 00:00:00";

    db.User_Badge
        .create({
            user_id: 4,
            badge_id: 1,
            date_aquired: dateNow,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User_Badge
        .create({
            user_id: 4,
            badge_id: 2,
            date_aquired: dateNow,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User_Badge
        .create({
            user_id: 4,
            badge_id: 3,
            date_aquired: dateNow,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User_Badge
        .create({
            user_id: 1,
            badge_id: 2,
            date_aquired: dateNow,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })
    // };
};

var createNewBadges = function (db) {
    //   return function(req, res) {
    db.Badge
        .create({
            desc: "EcoWarriors",
            img_filename: "EcoWarriors.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Badge
        .create({
            desc: "Cat Lover",
            img_filename: "Cat_Lover.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Badge
        .create({
            desc: "Animal Lover",
            img_filename: "Animal_Lover.jpg",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })
    // };
};

var createNewUser_Alerts = function (db) {
    //   return function(req, res) {

    db.User_Alert
        .create({
            user_id: 4,
            event_id: 3,
            alert_id: 1,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.User_Alert
        .create({
            user_id: 5,
            event_id: 3,
            alert_id: 2,
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })
}

var createNewAlerts = function (db) {
    //   return function(req, res) {
    db.Alert
        .create({
            alert_msg: "You have a new Event assign to the role of Event Organizer",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })

    db.Alert
        .create({
            alert_msg: "Reminder: Please fill in the feedback form",
        })
        .then(function (user) {
            console.log(user);
        }).catch(function () {
            console.log("Error", arguments)
        })
}

// Export route handlers
module.exports = function (db) {
    return {
        createNewAllTables: createNewAllTables(db),
    }
};