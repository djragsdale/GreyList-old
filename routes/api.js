// initialize our faux database
var fauxdb = require('../model/fauxdb');

var mongoose = require('mongoose');
var List = require('../model/list');


// GET

exports.templates = function (req, res) {
    var templates = [];
    fauxdb.data.templates.forEach(function (template, i) {
        templates.push({
            id: i,
            title: template.title,
            lastupdated: template.lastupdated,
            items: template.items
        });
    });
    res.json({
        templates: templates
    });
};

exports.template = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < fauxdb.data.templates.length) {
        res.json({
            template: fauxdb.data.templates[id]
        });
    } else {
        res.json(false);
    }
};

exports.lists = function (req, res) {
    var lists = [];
    fauxdb.data.lists.forEach(function (list, i) {
        var intComplete = 0;
        list.items.forEach(function (item, i) {
            if (item.checked) {
                intComplete++;
            }
        });
        lists.push({
            id: i,
            title: list.title,
            lastupdated: list.lastupdated,
            items: list.items,
            completed: intComplete
        });
    });
    var templates = [];
    fauxdb.data.templates.forEach(function (template, i) {
        templates.push({
            id: template.id,
            title: template.title,
            lastupdated: template.lastupdated,
            items: template.items
        });
    });

    //mongoose.model('List').find({}, function (err, lists) {
    //    if (err) {
    //        return console.error(err);
    //    } else {
    //        res.json({
    //            lists: lists
    //        });
    //    }
    //});

    res.json({
        lists: lists,
        templates: templates
    });
};

exports.list = function (req, res) {
    var templates = [];
    fauxdb.data.templates.forEach(function (template, i) {
        templates.push({
            id: template.id,
            title: template.title,
            lastupdated: template.lastupdated,
            items: template.items
        });
    });
    var id = req.params.id;
    if (id >= 0 && id < fauxdb.data.lists.length) {
        res.json({
            list: fauxdb.data.lists[id],
            templates: templates
        });
    } else {
        res.json(false);
    }
};

exports.getListFromJson = function (req, res) {
    var item = {
        id: 3,
        //title: req.body.title,
        title: "myList"
    };

    var list = new List({ id: 3, title: 'helloList' });
    list.save(function (err, list) {
        if (err) { return null }
        res.json(list);
    });
};

// POST
exports.addList = function (req, res) {
    //fauxdb.data.lists.push(req.body);
    var item = {
        id: 3,
        title: req.body.title,
        lastupdated: "now"
    };
    fauxdb.data.lists.push(item);

    res.json(item);
};

exports.addListFromJson = function (req, res) {
    var item = {
        id: 3,
        //title: req.body.title,
        title: "myList"
    };
    
    res.json(req.body);
};

// POST
exports.addListFromTemplate = function (req, res) {
    var id = req.body.template;
    var newList = {
        "id": 9, // TODO: get the next value
        "title": "No name",
        "lastupdated": "current time",
        "items": []
    };
    fauxdb.data.templates[id].items.forEach(function (item, i) {
        newList.items.push({
            id: i,
            seqno: i,
            checked: false,
            lastupdated: "current time",
            text: item.text
        });
    });
    fauxdb.data.lists.push(newList);
    res.json(newList);
};

// PUT
exports.editList = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < fauxdb.data.lists.length) {
        fauxdb.data.lists[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deleteList = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < fauxdb.data.lists.length) {
        fauxdb.data.lists.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};



exports.posts = function (req, res) {
    var posts = [];
    fauxdb.data.posts.forEach(function (post, i) {
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    });
    res.json({
        posts: posts
    });
};

exports.post = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < fauxdb.data.posts.length) {
        res.json({
            post: fauxdb.data.posts[id]
        });
    } else {
        res.json(false);
    }
};

// POST
exports.addPost = function (req, res) {
    fauxdb.data.posts.push(req.body);
    res.json(req.body);
};

// PUT
exports.editPost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < fauxdb.data.posts.length) {
        fauxdb.data.posts[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deletePost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < fauxdb.data.posts.length) {
        fauxdb.data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};
