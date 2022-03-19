DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE SET NULL
);


CREATE TABLE employee_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(50),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee_info(id)
    ON DELETE SET NULL
);