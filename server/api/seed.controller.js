// Defines endpoint handler exposed to client side for retrieving department information from database

var createNewRole = function(db) {
  return function(req, res) {

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
  }
}


var createNewUser = function(db) {
  return function(req, res) {
        db.User
            .create({
                role_id: 1,
                nric: "S4535258D",
                saturation: "Mr",
                name_first: "John",
                name_last: "Kwan",
                gender: 'M',
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
                saturation: "Ms",
                name_first: "Jenny",
                name_last: "Liu",
                gender: 'F',
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
                saturation: "Mr",
                name_first: "Kenneth",
                name_last: "Pang",
                gender: 'M',
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
                role_id: 4,
                nric: "S7423297G",
                saturation: "Dr",
                name_first: "Winnie",
                name_last: "Liang",
                gender: 'F',
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
                saturation: "Ms",
                name_first: "Alice",
                name_last: "Tan",
                gender: 'F',
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
                saturation: "Mr",
                name_first: "Terry",
                name_last: "Foo",
                gender: 'M',
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
                saturation: "Ms",
                name_first: "Felicia",
                name_last: "Tang",
                gender: 'F',
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


  };
}

var createNewEvent = function(db) {
  return function(req, res) {
        db.Events
            .create({
                organisation_id: 1,
                brief_desc: "U Heart: Tales From The Heart (Organising Committee Recruitment)",
                detail_desc: "Calling out for volunteers to join us in the core team to plan for Young NTUC U Heart 2017 – Finale!",
                date: "2017-12-12 00:00:00",
                start_time: "11:00:00",
                end_time: "15:00:00",
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
                date: "2017-12-30 00:00:00",
                start_time: "10:00:00",
                end_time: "17:00:00",
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
                date: "2017-12-01 00:00:00",
                start_time: "10:30:00",
                end_time: "17:30:00",
                venue: "",
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
                date: "2017-12-03 00:00:00",
                start_time: "08:00:00",
                end_time: "23:00:00",
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
                date: "2017-12-15 00:00:00",
                start_time: "09:00:00",
                end_time: "13:00:00",
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
                date: "2017-12-18 00:00:00",
                start_time: "19:00:00",
                end_time: "22:00:00",
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
                date: "2017-12-04 00:00:00",
                start_time: "18:30:00",
                end_time: "21:30:00",
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
                date: "2017-12-02 00:00:00",
                start_time: "09:00:00",
                end_time: "18:00:00",
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
                date: "2017-12-06 00:00:00",
                start_time: "18:00:00",
                end_time: "21:30:00",
                venue: "Boys' Town, 624 Upper Bukit Timah Road, Singapore 678212",
                category: "General",
                img_filename: "UHeart09.jpg",
            })
            .then(function (user) {
                console.log(user);
            }).catch(function () {
                console.log("Error", arguments)
            })

    }
  }

  var createNewOrganisation = function(db) {
  return function(req, res) {
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
    }
  }

// Export route handlers
module.exports = function(db) {
  return {
    createNewRole: createNewRole(db),
    createNewUser: createNewUser(db),
    createNewEvent: createNewEvent(db),
    createNewOrganisation: createNewOrganisation(db),

  }
};