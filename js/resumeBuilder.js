var resumeData = {};

$.ajaxSetup( { "async": false } );

$.getJSON('json/bio.json', function (bio) {
  resumeData.bio = bio;
});

$.getJSON('json/education.json', function (education) {
  resumeData.education = education;
});

$.getJSON('json/projects.json', function (projects) {
  resumeData.projects = projects;
});

$.getJSON('json/work.json', function (work) {
  resumeData.work = work;
});
