define({ "api": [  {    "type": "get",    "url": "/activity",    "title": "Create activity",    "name": "Create",    "group": "Activity",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:200,\n\tmessage:\"OK\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:500,\n\tmessage:\"Error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/activity.js",    "groupTitle": "Activity"  },  {    "type": "delete",    "url": "/activity",    "title": "Delete activity",    "name": "Delete",    "group": "Activity",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:200,\n\tmessage:\"OK\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:500,\n\tmessage:\"Error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/activity.js",    "groupTitle": "Activity"  },  {    "type": "get",    "url": "/activity/:login",    "title": "List activities",    "name": "List",    "group": "Activity",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Text",            "optional": false,            "field": "User",            "description": "<p>ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:200,\n\tactivities:\n\t[\n\t\t{\n\t\t\t\"start\": \"01:00:00\",\n\t\t\t\"length\": 20,\n\t\t\t\"descripcion\": \"Activity 1\",\n\t\t\t\"created\":\"\",\n\t\t\t\"updated\":\"\"\n\t\t}\n\t]\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:500,\n\tactivities:[]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/activity.js",    "groupTitle": "Activity"  },  {    "type": "put",    "url": "/activity",    "title": "Update activity",    "name": "Update",    "group": "Activity",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:200,\n\tmessage:\"OK\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\tresponse:500,\n\tmessage:\"Error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/activity.js",    "groupTitle": "Activity"  },  {    "type": "post",    "url": "/auth/signup",    "title": "Create an account",    "name": "Create",    "group": "Auth",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "    {\n      \"login\": \"danyel\",\n\t\t \"password\": \"danyel\",\n\t\t \"private\":true\n    }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"response\": \"200\",\n  \"message\": \"OK\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\n\t \"response\": \"500\",\n\t \"message\": \"Error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/auth.js",    "groupTitle": "Auth"  },  {    "type": "delete",    "url": "/auth",    "title": "Delete an account",    "name": "Delete",    "group": "Auth",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "    {\n      \"login\": \"danyel\",\n\t\t \"password\": \"danyel\"\n    }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"response\": \"200\",\n  \"message\": \"OK\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\n\t\"response\": \"500\",\n\t\"message\": \"Error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/auth/login",    "title": "Login",    "name": "Login",    "group": "Auth",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "    {\n      \"login\": \"danyel\",\n\t\t \"password\": \"danyel\"\n    }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n    {\n      \"response\": \"200\",\n      \"message\": \"OK\",\n\t\t \"private\": true\n    }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\n\t\"response\": \"200\",\n\t\"message\": \"Invalid user and password\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/auth.js",    "groupTitle": "Auth"  },  {    "type": "put",    "url": "/auth",    "title": "Update an account",    "name": "Update",    "group": "Auth",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "    {\n      \"login\": \"danyel\",\n\t\t \"password\": \"danyel\",\n\t\t \"newpassword\":\"danyel2\",\n\t\t \"private\":true\n    }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"response\": \"200\",\n  \"message\": \"OK\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\n\t \"response\": \"500\",\n\t \"message\": \"Error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/auth.js",    "groupTitle": "Auth"  }] });
