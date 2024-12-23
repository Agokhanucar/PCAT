const Project = require('../models/Project');

exports.getAllProjects = (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) return res.status(500).send(err);
    res.render('index', { projects });
  });
};

exports.getAddProject = (req, res) => {
  res.render('add');
};

exports.postAddProject = (req, res) => {
  const { title, description, image } = req.body;
  const newProject = new Project({ title, description, image });
  newProject.save(err => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};

exports.getEditProject = (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) return res.status(500).send(err);
    res.render('edit', { project });
  });
};

exports.postEditProject = (req, res) => {
  const { title, description, image } = req.body;
  Project.findByIdAndUpdate(req.params.id, { title, description, image }, err => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
}; 