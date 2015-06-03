var bio = {
  name: "Jacob Williams",
  role: "Fron-End Web Developer",
  contacts: {
    mobile: "(888) 888-8888",
    email: "jake@example.me",
    github: "supergeekjake",
    twitter: "@supergeekjake",
    location: "Santa Cruz, CA"
  },
  welcomeMessage: "I'm a tech-loving Web Developer from Santa Cruz dreaming big things!",
  skills: [
    "HTML5",
    "CSS",
    "Javascript",
    "jQuery",
    "PHP",
    "Sass",
    "Foundation",
    "Git"
  ],
  biopic: "images/fry.jpg",
  display: function () {
    var headerRole = HTMLheaderRole.replace('%data%', this.role);
    var headerName = HTMLheaderName.replace('%data%', this.name);

    var contactMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
    var contactEmail = HTMLemail.replace('%data%', this.contacts.email);
    var contactTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter);
    var contactGithub = HTMLgithub.replace('%data%', this.contacts.github);
    var contactLocation = HTMLlocation.replace('%data%', this.contacts.location);

    var bioPic = HTMLbioPic.replace('%data%', this.biopic);
    var bioMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
    var bioSkills = '';
    for (var i = 0; i < this.skills.length; i++) {
      bioSkills += HTMLskills.replace('%data%', this.skills[i]);
    }

    jQuery('#header').prepend(headerName, headerRole);
    jQuery('#topContacts').prepend(contactMobile, contactEmail, contactGithub, contactTwitter, contactLocation);
    jQuery('#header').append(bioPic, bioMsg, HTMLskillsStart);
    jQuery('#skills').append(bioSkills);
  }
}

var work = {
  jobs: [
    {
      employer: "Launch Brigade",
      title: "Web Developer",
      location: "Santa Cruz, CA",
      dates: "2013 - Current",
      description: "Built branded marketing websites on top of the WordPress CMS."
    }
  ],
  display: function () {
    var i = 0;
    while(i < this.jobs.length) {
      var job = '';
      job += HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
      job += HTMLworkTitle.replace('%data%', this.jobs[i].title);
      job += HTMLworkDates.replace('%data%', this.jobs[i].dates);
      job += HTMLworkLocation.replace('%data%', this.jobs[i].location);
      job += HTMLworkDescription.replace('%data%', this.jobs[i].description);

      job = HTMLworkStart.replace('><', '>' + job + '<');

      jQuery('#workExperience').append(job);

      i++;
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Rocket Fuel",
      "dates": "2014",
      "description": "A starter WordPress theme powered by Foundation, Gulp, & Browserify",
      "image": "https://raw.githubusercontent.com/LaunchBrigade/rocket-fuel/master/screenshot.png"
    }
  ],
  display: function () {
    var i = 0;
    while(i < this.projects.length) {
      var project = '';
      project += HTMLprojectTitle.replace('%data%', this.projects[i].title);
      project += HTMLprojectDates.replace('%data%', this.projects[i].dates);
      project += HTMLprojectDescription.replace('%data%', this.projects[i].description);
      project += HTMLprojectImage.replace('%data%', this.projects[i].image);

      project = HTMLprojectStart.replace('><', '>' + project + '<');

      jQuery('#projects').append(project);

      i++;
    }
  }
};

var education = {
  schools: [
    {
      name: "Cabrillo College",
      location: "Aptos, CA",
      degree: "Bachelor of Arts",
      major: "Computer Science",
      dates: 2013,
      url: "http://cabrillo.edu/",
    }
  ],
  onlineCourses: [
    {
      title: "JavaScript Crash Course",
      school: "Udacity",
      date: 2015,
      url: "http://www.udacity.com/"
    }
  ],
  display: function () {
    var i = 0;
    while(i < this.schools.length) {
      var school = '';
      school += HTMLschoolName.replace('%data%', this.schools[i].name);
      school += HTMLschoolDegree.replace('%data%', this.schools[i].degree);
      school += HTMLschoolDates.replace('%data%', this.schools[i].dates);
      school += HTMLschoolLocation.replace('%data%', this.schools[i].location);
      school += HTMLschoolMajor.replace('%data%', this.schools[i].major);

      school = HTMLschoolStart.replace('><', '>' + school + '<');

      jQuery('#education').append(school);

      i++;
    }

    if (this.onlineCourses.length !== 0) {
      jQuery('#education').append(HTMLonlineClasses);
    }

    var i = 0;
    while(i < this.onlineCourses.length) {
      var onlineCourse = '';
      onlineCourse += HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
      onlineCourse += HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
      onlineCourse += HTMLonlineDates.replace('%data%', this.onlineCourses[i].date);
      onlineCourse += HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);

      onlineCourse = HTMLschoolStart.replace('><', '>' + onlineCourse + '<');

      jQuery('#education').append(onlineCourse);

      i++;
    }
  }
}

bio.display();
work.display();
projects.display();
education.display();
