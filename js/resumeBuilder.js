var bio = {
    "name": "Jae-Hwan (Jeff) Jung",
    "role": "Software Developer",
    "welcomeMessage": "Dear guest, I welcome you to my resume with much love!",
    "contacts": {
        "mobile": "604-614-4552",
        "email": "j.jung.83@alumni.ubc.ca",
        "github": "midlife83",
        "twitter": "N/A",
        "location": "Vancouver, BC V6E 1G1",
        "blog": "N/A"
    },
    "skills": ["C#", "ServiceStack", "WCF", "Silverlight", "Javascript", "CSS", "HTML", "8-hour sleep"],
    "biopic": "images/MyPic.jpg",
    "display": function () {
        function appendFormattedToTopContacts(element, data) {
            var $topContacts = $("#topContacts");
            appendFormatted($topContacts, element, data);
        }

        function appendFormattedToFooterContacts(element, data) {
            var $footerContacts = $("#footerContacts");
            appendFormatted($footerContacts, element, data);
        }

        function displayContactsInHeader() {
            appendFormattedToTopContacts(HTMLmobile, bio.contacts.mobile);
            appendFormattedToTopContacts(HTMLemail, bio.contacts.email);
            appendFormattedToTopContacts(HTMLgithub, bio.contacts.github);
            appendFormattedToTopContacts(HTMLtwitter, bio.contacts.twitter);
            appendFormattedToTopContacts(HTMLlocation, bio.contacts.location);
            appendFormattedToTopContacts(HTMLblog, bio.contacts.blog);
        }

        function displaySkills() {
            $header.append(HTMLskillsStart);
            for (var skill in bio.skills) {
                if (bio.skills.hasOwnProperty(skill)) {
                    appendFormatted($("#skills"), HTMLskills, bio.skills[skill]);
                }
            }
        }

        function displayContactsInFooter() {
            appendFormattedToFooterContacts(HTMLmobile, bio.contacts.mobile);
            appendFormattedToFooterContacts(HTMLemail, bio.contacts.email);
            appendFormattedToFooterContacts(HTMLgithub, bio.contacts.github);
            appendFormattedToFooterContacts(HTMLtwitter, bio.contacts.twitter);
            appendFormattedToFooterContacts(HTMLlocation, bio.contacts.location);
        }

        var $header = $("#header");
        prependFormatted($header, HTMLheaderRole, bio.role);
        prependFormatted($header, HTMLheaderName, bio.name);
        displayContactsInHeader();
        appendFormatted($header, HTMLbioPic, bio.biopic);
        appendFormatted($header, HTMLWelcomeMsg, bio.welcomeMessage);
        displaySkills();
        displayContactsInFooter();
    }
};

var education = {
    "schools": [
        {
            "name": "University of British Columbia",
            "location": "2329 West Mall, Vancouver, BC V6T 1Z4",
            "degree": "BASc",
            "majors": ["Computer Engineering - Software Option"],
            "dates": 2014,
            "url": "http://www.ubc.ca"
        },
        {
            "name": "British Columbia Institute of Technology",
            "location": "3800 Cessna Drive, Richmond, BC V7B 0A1",
            "degree": "Diploma",
            "majors": ["Aircraft Maintenance Engineering"],
            "dates": 2007,
            "url": "http://www.bcit.ca"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com"

        }
    ],
    "display": function () {
        var $education = $('#education');

        function getLastEducationEntry() {
            return getLastElement("education-entry");
        }

        function appendFormattedToLastEducationEntry(element, data) {
            var lastEducationEntry = getLastEducationEntry();
            appendFormatted(lastEducationEntry, element, data);
        }

        function displaySchools() {
            for (var schoolKey in education.schools) {
                if (education.schools.hasOwnProperty(schoolKey)) {
                    var school = education.schools[schoolKey];
                    $education.append(HTMLschoolStart);
                    var formattedName = formatElement(HTMLschoolName, school.name);
                    var formattedDegree = formatElement(HTMLschoolDegree, school.degree);
                    var formattedTitle = formattedName + formattedDegree;
                    getLastEducationEntry().append(formattedTitle);
                    appendFormattedToLastEducationEntry(HTMLschoolDates, school.dates);
                    appendFormattedToLastEducationEntry(HTMLschoolLocation, school.location);
                    appendFormattedToLastEducationEntry(HTMLschoolMajor, school.majors);
                }
            }
        }

        function displayOnlineCourses() {
            $education.append(HTMLonlineClasses);
            for (var onlineCourseKey in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(onlineCourseKey)) {
                    $education.append(HTMLschoolStart);
                    var onlineCourse = education.onlineCourses[onlineCourseKey];
                    var formattedOnlineTitle = formatElement(HTMLonlineTitle, onlineCourse.title);
                    var formattedSchool = formatElement(HTMLonlineSchool, onlineCourse.school);
                    var formattedHeader = formattedOnlineTitle + formattedSchool;
                    getLastEducationEntry().append(formattedHeader);
                    appendFormattedToLastEducationEntry(HTMLonlineDates, onlineCourse.dates);
                    appendFormattedToLastEducationEntry(HTMLonlineURL, onlineCourse.url);
                }
            }
        }

        displaySchools();
        displayOnlineCourses();
    }
};

var work = {
    "jobs": [
        {
            "employer": "Aquatic Informatics",
            "title": "Software Developer",
            "location": "Vancouver",
            "dates": [
                "2014, May 01 - Current"
            ],
            "description": ".NET developer working with various back-end technologies"
        },
        {
            "employer": "Carson Air",
            "title": "Aircraft Maintenance Engineer",
            "location": "Vancouver",
            "dates": [
                "2007, Jan 01 - 2011, Jan 01"
            ],
            "description": "Aircraft Maintenance, repair, inspection"
        }
    ],
    display: function () {
        var $workExperience = $("#workExperience");

        function getLastWorkEntry() {
            return getLastElement("work-entry");
        }

        function appendFormattedToLastWorkEntry(element, data) {
            var lastWorkEntry = getLastWorkEntry();
            appendFormatted(lastWorkEntry, element, data);
        }

        for (var jobKey in work.jobs) {
            if (work.jobs.hasOwnProperty(jobKey)) {
                $workExperience.append(HTMLworkStart);
                var job = work.jobs[jobKey];
                var formattedEmployer = formatElement(HTMLworkEmployer, job.employer);
                var formattedTitle = formatElement(HTMLworkTitle, job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                getLastWorkEntry().append(formattedEmployerTitle);
                appendFormattedToLastWorkEntry(HTMLworkDates, job.dates[0]);
                appendFormattedToLastWorkEntry(HTMLworkLocation, job.location);
                appendFormattedToLastWorkEntry(HTMLworkDescription, job.description);
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Mockup to Website",
            "dates": "2015, Jan 25",
            "description": "A web page created from a given mockup",
            "images": [
                "https://placekitten.com/g/250/250",
                "http://placesheen.com/250/250"
            ]
        },
        {
            "title": "Amazing Project",
            "dates": "2013, Feb 12",
            "description": "Super amazing project",
            "images": [
                "https://placekitten.com/g/500/250"
            ]
        }
    ],
    "display": function () {
        for (var project in projects.projects) {
            if (projects.projects.hasOwnProperty(project)) {
                $("#projects").append(HTMLprojectStart);

                var pro = projects.projects[project];
                var formattedTitle = formatElement(HTMLprojectTitle, pro.title);
                var formattedDates = formatElement(HTMLprojectDates, pro.dates);
                var formattedDescription = formatElement(HTMLprojectDescription, pro.description);

                var projectElement = $(".project-entry:last");
                projectElement.append(formattedTitle);
                projectElement.append(formattedDates);
                projectElement.append(formattedDescription);

                if (pro.images.length > 0) {
                    for (var image in pro.images) {
                        if (pro.images.hasOwnProperty(image)) {
                            var formattedImage = formatElement(HTMLprojectImage, pro.images[image]);
                            projectElement.append(formattedImage);
                        }
                    }
                }
            }
        }
    }
};

function formatElement(element, data) {
    return element.replace("%data%", data);
}

function appendFormatted(parentElement, childElement, data) {
    var formattedElement = formatElement(childElement, data);
    parentElement.append(formattedElement);
}

function prependFormatted(parentElement, childElement, data) {
    var formattedElement = formatElement(childElement, data);
    parentElement.prepend(formattedElement);
}

function getLastElement(className) {
    var selector = "." + className + ":last";
    return $(selector);
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
$('#main').append(internationalizeButton);