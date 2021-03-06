const connection = require('./connection')

class Department {
  constructor(name) {
    this.name = name
  }
  add() {
    connection.query(`
      INSERT INTO departments SET ?`,
      {
        department_name: `${this.name}`
      },
      function(err, res) {
        if (err) throw err;
        console.log("Department added.");
      }
    )
  }
}

class Employee {
  constructor(firstName, lastName, role, manager) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.manager = manager;
  }
  add() {
    connection.query(`
      INSERT INTO employees SET ?`,
      {
        first_name: `${this.firstName}`,
        last_name: `${this.lastName}`,
        role_id: `${this.role}`,
        manager_id: `${this.manager}`,
        // manager_id: `${this.manager}`
      },
      function(err, res) {
        if (err) throw err;
        console.log("Employee added.");
      }
    )
  } 
}

class Role {
  constructor(title, salary, dept) {
    this.title = title;
    this.salary = salary;
    this.dept = dept;
  }
  add() {
    connection.query(`
      INSERT INTO roles SET ?`,
      {
        title: `${this.title}`,
        salary: `${this.salary}`,
        department_id: `${this.dept}`
      },
      function(err, res) {
        if (err) throw err;
        console.log("Role added.");
      }
    )
  }
}

module.exports = { Department, Role, Employee };