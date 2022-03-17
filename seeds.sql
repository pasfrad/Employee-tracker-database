INSERT INTO departments (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (department_id, role_name, salary)
VALUES (3, "Director", 160000),
       (1, "Senior Engineer", 120000),
       (1, "Junior Engineer", 90000),
       (2, "Accountant", 100000),
       (2, "Finance Director", 100000),
       (3, "Legal Administrative Manager", 130000),
       (3, "Legal Administrative Assistant", 110000),
       (4, "Sales Manager", 105000),
       (4, "Advertising Manager", 95000);

INSERT INTO employee_info (first_name, last_name, role_id, manager_id)
VALUES ("Gilbert", "Chesterton", 1, 1),
       ("Agatha", "Christie", 2, 1),
       ("Kurt", "Vonnegut", 3, 2),
       ("Neil", "Gaiman", 5, 1),
       ("Terry", "Pratchett", 6, 1),
       ("Richard", "Adams", 8, 1),
       ("Douglas", "Adams", 4, 5),
       ("Mary", "Shelly", 7, 6),
       ("Isaac", "Asimov", 9, 8);